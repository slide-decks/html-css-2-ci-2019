import styled from 'styled-components';
import { Component } from 'react';
import { setMouseMove } from '../../../slide-deck/Deck/slides-methods';

const Container = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 21px 10px 0;
    transition: opacity 1500ms;
    opacity: 1;
   
    p {
        color: var(--blue);
        font-size: 25px;
        line-height: 29px;
        font-weight: var(--bold);
        padding-top: 5px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgb(184, 184, 184, 0.5);
    border-radius: 8px;
    margin-bottom: 4px;
    padding: 3px 5px 2px 7px;
    transition: all 1500ms;
    opacity: 0;
    margin-right: -400px;
    &.show {
        opacity: 1;
        margin-right: 0;
    }

    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        padding-top: 11px;
    }
`;

const SlideNumber = styled.div`
    margin-left: 40px;
    margin-right: 40px;
    width: 76px;
    text-align: center;
`;

const Arrows = styled.div`
    display: flex;
    align-items: center;
    margin-right: 40px;
    padding-bottom: 9px;
`;

const LeftArrow = styled.button`
    cursor: pointer;

    img {
        transform: rotate(-90deg);
    }
`;

const RightArrow = styled(LeftArrow)`
    img {
        transform: rotate(90deg);
    }
`;

const ShowIcon = styled.button`
    background-color: rgb(184, 184, 184, 0.5);
    padding: 21px 15px 19px 15px;
    display: flex;
    flex-direction: row;
    align-items: center; 
    justify-content: center;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 8px;

    img {
        transform: rotate(0deg);
        transition: transform 700ms;

        &.show{
            transform: rotate(-180deg);
        }
    }
`;


class Panel extends Component {
    constructor(props){
        super(props);
        
        this.timer = null;

        this.state = {
            isMinimized: false,
            isVisible: false,
        }

    this.setMouseMove = setMouseMove.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', () => this.setMouseMove());
        window.addEventListener('mousemove', () => this.setMouseMove());
        window.addEventListener('click', () => {
            this.setState({ isMinimized: false });
        })
    }

    toggleToolbar = e => {
        e.stopPropagation();
        const checkTo = !this.state.isMinimized;
        this.setState({ isMinimized: checkTo});
        this.setMouseMove();
    };


    render(){
        const { actualSlide, slides, prevSlide, nextSlide, newTheme } = this.props;
        
        const toggleButtonStyle = {
            opacity: this.state.isVisible ? '1': '0',
        };

        const changeCursor = {
            cursor: this.state.isVisible ? 'pointer' : 'none',
        };

        return (
        <Container id="container" style={toggleButtonStyle}>
            <Wrapper id="wrapper" onClick = {e => e.stopPropagation()} className={ this.state.isMinimized ? "show" : null }>
                <Arrows className="arrows">
                    <LeftArrow style = {changeCursor} disabled={!this.state.isVisible} onClick={prevSlide}><img src="/static/icons/light/small_arrow_up.svg"/></LeftArrow>
                    <SlideNumber className="slide-number">
                        <p> {actualSlide + 1}|{slides} </p>
                    </SlideNumber>
                    <RightArrow style = {changeCursor} onClick={nextSlide}><img src="/static/icons/light/small_arrow_up.svg"/></RightArrow>
                </Arrows>
                <button style = {changeCursor} disabled={!this.state.isVisible} onClick={newTheme}><img src="/static/icons/light/theme_btn.svg"/></button>
            </Wrapper>
            <ShowIcon 
                style = {changeCursor} 
                disabled={!this.state.isVisible} 
                onClick={this.toggleToolbar}>
                <img  className={ this.state.isMinimized ? "show" : null } src="/static/icons/light/small_arrow_up.svg"/>
            </ShowIcon>
        </Container>
        );
    };
};

export default Panel;