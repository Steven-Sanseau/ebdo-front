import React from 'react'
import Lightbox from 'react-images'
import styled from 'styled-components'
import { media } from 'global-styles'
import moment from 'moment'

import 'components/Gallery/Gallery.css'

const Undercover = styled.div`
  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-top: 1px solid var(--grey-blue);
  }
  .fond {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: white;
    border: 1px solid var(--grey-blue);
    border-bottom-width: 0;
    border-bottom: none;
    transition: transform 0.3s ease-out;

    &:nth-of-type(1) {
      z-index: -2;
      left: 3px;
    }
    &:nth-of-type(2) {
      z-index: -3;
      left: 6px;
    }
    &:nth-of-type(3) {
      z-index: -4;
      left: 9px;
    }
    &:nth-of-type(4) {
      z-index: -5;
      left: 12px;
    }
    &:nth-of-type(5) {
      z-index: -6;
      left: 15px;
    }
  }
`
const CTA = styled.button`
  color: var(--cool-grey);
  font-family: FG-R;
  border: 1px solid var(--cool-grey);
  border-radius: 16px;
  background-color: var(--white-true);
  position: absolute;
  padding: 0 20px;
  bottom: 50px;
  right: -40px;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-weight: 400;
  &:hover {
    transform: scale(1.05);
  }
  ${media.tablet`
    display: none;
  `};
`
const Cover = styled.div`
  cursor: pointer;
  img {
    transition: transform 0.3s ease-out;
    border: 1px solid var(--grey-blue);
  }
  button {
    transition: opacity 0.2s ease-out;
  }
  &:hover > img,
  &:hover .pin {
    transform: translateX(-150px);
    ${media.tablet`
      transform: translateX(0);
    `};
  }
  &:hover div img,
  &:hover .fond {
    transform: translateX(50px);
    ${media.tablet`
      transform: translateX(0);
    `};
  }
  &:hover button {
    opacity: 0;
  }
`
const Pin = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0 12px;
  background: #9d358a;
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin-top: -30px;
  transition: transform 0.3s ease-out;
`

const Images = [
  {
    src:
      'https://s3.eu-west-3.amazonaws.com/ebdo/front/home/thumbmail/current/0.jpg'
  },
  {
    src:
      'https://s3.eu-west-3.amazonaws.com/ebdo/front/home/thumbmail/current/2.jpg'
  },
  {
    src:
      'https://s3.eu-west-3.amazonaws.com/ebdo/front/home/thumbmail/current/3.jpg'
  },
  {
    src:
      'https://s3.eu-west-3.amazonaws.com/ebdo/front/home/thumbmail/current/4.jpg'
  },
  {
    src:
      'https://s3.eu-west-3.amazonaws.com/ebdo/front/home/thumbmail/current/5.jpg'
  },
  {
    src:
      'https://s3.eu-west-3.amazonaws.com/ebdo/front/home/thumbmail/current/6.jpg'
  },
  {
    src:
      'https://s3.eu-west-3.amazonaws.com/ebdo/front/home/thumbmail/current/7.jpg'
  }
]
const firstPage =
  'https://s3.eu-west-3.amazonaws.com/ebdo/front/home/thumbmail/current/0.jpg'
const summary =
  'https://s3.eu-west-3.amazonaws.com/ebdo/front/home/thumbmail/current/1.jpg'

class Gallery extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.gotoImage = this.gotoImage.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
  }
  openLightbox(event) {
    event.preventDefault()
    this.setState({
      currentImage: 0,
      lightboxIsOpen: true
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }
  gotoImage(index) {
    this.setState({
      currentImage: index
    })
  }
  handleClickImage() {
    if (this.state.currentImage === Images.length - 1) {
      this.closeLightbox()
    }

    this.gotoNext()
  }
  render() {
    return (
      <Cover onClick={this.openLightbox}>
        <img src={firstPage} alt="première de couverture ebdo" width="100%" />
        <Pin className="pin">En kiosque cette semaine</Pin>
        <Undercover>
          <img src={summary} alt="sommaire" width="100%" />
          <div className="fond" />
          <div className="fond" />
          <div className="fond" />
          <div className="fond" />
        </Undercover>
        <CTA>Feuilleter un extrait</CTA>
        <Lightbox
          currentImage={this.state.currentImage}
          images={Images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          imageCountSeparator=" sur "
          backdropClosesModal
          // showThumbnails={this.props.showThumbnails}
        />
      </Cover>
    )
  }
}

Gallery.propTypes = {}

export default Gallery
