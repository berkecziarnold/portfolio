import React from 'react';

import Card from '../components/Card';

import devgrub from '../assets/images/devgrub.jpg';
import instagram from '../assets/images/instagram.jpg';
import githubpage from '../assets/images/githubpage.jpg';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: devgrub,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Berkeczi Arnold',
                    subTitle: 'My Instagram page',
                    imgSrc: instagram,
                    link: 'https://www.instagram.com/berkeczi_arnold/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'GitHubPage',
                    subTitle: 'My GitHub Page',
                    imgSrc: githubpage,
                    link: 'https://github.com/berkecziarnold',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
    
}

export default Carousel;