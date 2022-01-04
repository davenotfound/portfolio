import React from 'react'
import "./socials.styles.scss"

class Socials extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      socialLinks: [
        {
          linkName: 'LINKEDIN',
          url: ''
        },
        {
          linkName: 'GITHUB',
          url: ''
        },
        {
          linkName: 'EMAIL',
          url: ''
        },
      ],
      linkAnimation: false
    }
  }

  //REVISIT: staggered animation times for link elements
  // animate = (timerVal) => {
  //   setTimeout(async () => {
  //     await this.setState({ linkAnimation: true });
  //   }, timerVal+2500);
  // };

  // componentDidMount() {
     // this.animate();
  // }

  render() {
    return(
      <div className='socials'>
        <ul>
          {
          this.state.socialLinks
            .map((linkItem, index) => (
              <li key={index} className={`${this.props.beginAnimation ? 'active' : ''} link`}>{linkItem.linkName}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Socials;