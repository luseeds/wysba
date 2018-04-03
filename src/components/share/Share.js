import React from 'react'

import Section from 'components/ui/section/Section'
import './Share.css'

const Share = () => (
  <Section title="Share" reverse className="result-share">
    <p>Feel free to share it. Education is super important nowadays that's why sharing knowledge is key.</p>
    <div className="fb-share-button" data-href="https://wysba.luseeds.com" data-layout="button" data-size="large" data-mobile-iframe="true"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwysba.luseeds.com%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>
    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-text="Farmed animals are killed at a very young age, if you were one, would you still be alive? Find the answer:" data-url="https://wysba.luseeds.com" data-via="luseeds" data-hashtags="wysba" data-dnt="true" data-show-count="false">Tweet</a>
  </Section>
)

export default Share
