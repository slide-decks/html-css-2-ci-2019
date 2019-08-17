import { withRouter } from 'next/router';
import { Component } from 'react';
import { number, oneOfType, exact, string, shape, oneOf, object, arrayOf, objectOf, func } from 'prop-types';
import GlobalStyle from '../GlobalStyle';
import Slide from '../Slide';
import { nextSlide, prevSlide, handleArrowPress } from './slides-methods';
import { renderHead } from './renderers';
import ThemeContext from '../../templates/main/components/ThemeContext';
import { Panel } from '../../templates/main/components';
import { ProgressBar } from '../../templates/main/components';
import { ScreenSize } from '../../templates/main/components';
import { updateURL, checkForStateChange, checkForNewAnimation, addKeysToSlides, getScale } from './utils';
import { Container } from './styles';

import '../../style/main.scss';

const types = ['prev', 'curr', 'next'];

@withRouter
class Deck extends Component {
  constructor(props) {
    super(props);
    const { router, config, template } = props;

    this.state = {
      slideIndex: Number(router.query.slide) || 0,
      scale: 0,
      animation: null,
      theme: 'light',
      percentage: 0,
    };

    this.slides = addKeysToSlides(config.slides);
    this.slidesCount = this.slides.length;
    this.template = template;
    this.head = renderHead(this.template.head);

    this.nextSlide = nextSlide.bind(this);
    this.prevSlide = prevSlide.bind(this);
    this.handleArrowPress = handleArrowPress.bind(this);

    this.toggleTheme = this.toggleTheme.bind(this);
  }

    toggleTheme() {
    const theme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.setState({ theme });
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.add('theme-transition')
    window.setTimeout(function() {
      document.documentElement.classList.remove('theme-transition')
    }, 1000)
    this.forceUpdate();
      }

  componentDidMount() {
    window.addEventListener('keydown', this.moveProgressBar);
    window.addEventListener('keydown', this.handleArrowPress);
    window.addEventListener('resize', this.handleScaleChange);


    if (this.template.scripts.onInit) {
      this.template.scripts.onInit(this);
    }

    this.handleScaleChange({ currentTarget: window });
    this.setState({ percentage: this.state.slideIndex/(this.slidesCount - 1)*100 });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return checkForStateChange(this.state, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    updateURL(prevState, this.state, this.props.router);
    checkForNewAnimation(prevState, this.state, () => this.setState({ animation: null }));

    if(this.state.slideIndex === 0){
      this.setState({ percentage: 0})
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleArrowPress);
    window.removeEventListener('resize', this.handleScaleChange);

    if (this.template.scripts.onDestroy) {
      this.template.scripts.onDestroy(this);
    }
  }

  handleScaleChange = e => this.setState({ scale: getScale(e, this.template) });

  renderSlide = slide => {
    const { slideIndex, animation } = this.state;
    const visibleSlides = [slideIndex - 1, slideIndex, slideIndex + 1];

    if (visibleSlides.includes(slide.key)) {
      const type = types[visibleSlides.indexOf(slide.key)];
      return (
        <Slide
          template={this.template.slides}
          animation={animation}
          visible={slide.key === slideIndex}
          key={slide.key}
          type={type}
          data={slide}
        />
      );
    }
    return null;
  };

  render() {
    const { scale, slideIndex, percentage, theme } = this.state;
    const { width, height } = this.template.globals;

    return (
      <>
        {this.head}
        <GlobalStyle templateStyle={this.template.styles} />
        <ThemeContext.Provider value={theme}>
        <Container id="slide-screen" width={width} height={height} scale={scale}>
          {this.slides.map(this.renderSlide)}
          <Panel 
            actualSlide={slideIndex} 
            slides={this.slidesCount} 
            prevSlide={this.prevSlide}
            nextSlide={this.nextSlide}
            newTheme={this.toggleTheme}
          />
          <ScreenSize />
          <ProgressBar percentage={percentage} />
        </Container>
        </ThemeContext.Provider>
      </>
    );
  }
}

Deck.propTypes = {
  router: object,
  config: exact({
    slides: arrayOf(
      shape({
        animation: exact({
          type: oneOf(['horizontal', 'vertical']),
        }),
        content: object,
        template: string,
      }),
    ),
  }),
  template: shape({
    globals: exact({
      width: number,
      height: number,
    }),
    head: arrayOf(
      exact({
        key: oneOfType([string, number]),
        tag: string,
        content: string,
        attr: objectOf(string),
      }),
    ),
    slides: objectOf(func),
    styles: arrayOf(string),
  }),
};

export default Deck;
