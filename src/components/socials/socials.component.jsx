import React from 'react'
import "./socials.styles.scss"

class Socials extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      socialLinks: [
        {
          linkName: 'LINKEDIN',
          url: 'https://www.linkedin.com/in/davenotfound'
        },
        {
          linkName: 'GITHUB',
          url: 'https://github.com/davenotfound'
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
              <li key={index} className={`${this.props.beginAnimation ? 'active' : ''} link`}>
                <a href={`${linkItem.url}`} target='_blank' rel="noreferrer">{linkItem.linkName}</a>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Socials;