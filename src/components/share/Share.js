import React from 'react'

import SectionTitle from 'components/ui/sectionTitle/SectionTitle'
import './Share.css'

const Share = () => (
  <section className="result-share">
    <div className="text-center">
      <SectionTitle reverse>Share</SectionTitle>
    </div>
    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-text="Farmed animals are killed at a very young age, if you were one, would you still be alive? Find the answer:" data-url="http://wysba.luseeds.com" data-via="luseeds" data-hashtags="wysba" data-dnt="true" data-show-count="false">Tweet</a>
  </section>
)

export default Share
