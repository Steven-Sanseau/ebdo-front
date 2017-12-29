/**
 *
 * Gallery
 *
 */

import React from 'react'
import Lightbox from 'react-images'
import styled from 'styled-components'
import { media } from 'global-styles'

import 'components/Gallery/Gallery.css'

import '!file-loader?name=[name].[ext]!images/numero-0/1-sommaire-HD.jpg'
import '!file-loader?name=[name].[ext]!images/numero-0/2-infographie-HD.jpg'
import '!file-loader?name=[name].[ext]!images/numero-0/3-RER-HD.jpg'
import '!file-loader?name=[name].[ext]!images/numero-0/4-fusees-HD.jpg'
import '!file-loader?name=[name].[ext]!images/numero-0/5-bd-HD.jpg'
import '!file-loader?name=[name].[ext]!images/numero-0/6-cyberguerre-HD.jpg'
import '!file-loader?name=[name].[ext]!images/0-couv.jpg'

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
  }
  button {
    transition: opacity 0.2s ease-out;
  }
  &:hover > img {
    transform: translateX(-150px);
  }
  &:hover div img,
  &:hover .fond {
    transform: translateX(50px);
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
    src: '1-sommaire-HD.jpg'
  },
  {
    src: '2-infographie-HD.jpg'
  },
  {
    src: '3-RER-HD.jpg'
  },
  {
    src: '4-fusees-HD.jpg'
  },
  {
    src: '5-bd-HD.jpg'
  },
  {
    src: '6-cyberguerre-HD.jpg'
  }
]

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
    if (this.state.currentImage === Images.length - 1) return

    this.gotoNext()
  }
  render() {
    return (
      <Cover onClick={this.openLightbox}>
        <img src="0-couv.jpg" alt="couv" width="100%" />
        <Pin>En kiosque cette semaine</Pin>
        <Undercover>
          <img src="sommaire-droite.png" alt="sommaire" width="100%" />
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
