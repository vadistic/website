import Link from 'gatsby-link'
import * as React from 'react'

import {
  Blockquote,
  Code,
  Heading,
  Layout,
  Mode,
  Ol,
  Section,
  Text,
  Ul,
} from '../components'

const Typography: React.SFC<{}> = () => (
  <Layout>
    <Mode mode={{ color: 'light' }}>
      <Section>
        <Heading variant="annotation">Placeholder copy</Heading>
        <Text paragraph>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. <Code>Some Inline Code</Code> A small river named Duden flows by their place and
          supplies it with the necessary regelialia.
        </Text>
        <Code>// React 16</Code>
        <Heading variant="title">
          On deer horse aboard tritely yikes and much
        </Heading>
        <Text paragraph>
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious Semikoli, but the
          Little Blind Text didn’t listen. She packed her seven versalia, put
          her initial into the belt and made herself on the way.
        </Text>
        <Ul>
          <li>This however showed weasel</li>
          <li>
            Well uncritical so misled
            <Ul>
              <li>this is very interesting</li>
            </Ul>
          </li>
          <li>Goodness much until that fluid owl</li>
        </Ul>
        <Text paragraph>
          When she reached the first hills of the{' '}
          <strong>Italic Mountains</strong>, she had a last view back on the
          skyline of her hometown <em>Bookmarksgrove</em>, the headline of{' '}
          <a href="http://google.com">Alphabet Village</a> and the subline of
          her own road, the Line Lane. Pityful a rethoric question ran over her
          cheek, then she continued her way. On her way she met a copy.
        </Text>
        <Heading variant="heading">
          Overlaid the jeepers uselessly much excluding
        </Heading>
        <Text paragraph>
          But nothing the copy said could convince her and so it didn’t take
          long until a few insidious Copy Writers ambushed her, made her drunk
          with <a href="http://google.com">Longe and Parole</a> and dragged her
          into their agency, where they abused her for their projects again and
          again. And if she hasn’t been rewritten, then they are still using
          her.
        </Text>
        <Blockquote>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </Blockquote>
        <Text paragraph>
          It is a paradisematic country, in which roasted parts of sentences fly
          into your mouth. Even the all-powerful Pointing has no control about
          the blind texts it is an almost unorthographic life One day however a
          small line of blind text by the name of Lorem Ipsum decided to leave
          for the far World of Grammar.
        </Text>
        <Heading variant="heading">
          According a funnily until pre-set or arrogant well cheerful
        </Heading>
        <Text paragraph>
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious Semikoli, but the
          Little Blind Text didn’t listen. She packed her seven versalia, put
          her initial into the belt and made herself on the way.
        </Text>
        <Ol>
          <li>So baboon this</li>
          <li>
            Mounted militant weasel gregariously admonishingly straightly hey
          </li>
          <li>Dear foresaw hungry and much some overhung</li>
          <li>
            Rash opossum less because less some amid besides yikes jeepers
            frenetic impassive fruitlessly shut
          </li>
        </Ol>
        <Text paragraph>
          When she reached the first hills of the Italic Mountains, she had a
          last view back on the skyline of her hometown Bookmarksgrove, the
          headline of Alphabet Village and the subline of her own road, the Line
          Lane. Pityful a rethoric question ran over her cheek, then she
          continued her way. On her way she met a copy.
        </Text>
        <Blockquote>
          The copy warned the Little Blind Text, that where it came from it
          would have been rewritten a thousand times and everything that was
          left from its origin would be the word “and” and the Little Blind Text
          should turn around and return to its own, safe country.
        </Blockquote>
        <Text paragraph>
          But nothing the copy said could convince her and so it didn’t take
          long until a few insidious Copy Writers ambushed her, made her drunk
          with Longe and Parole and dragged her into their agency, where they
          abused her for their projects again and again. And if she hasn’t been
          rewritten, then they are still using her. Far far away, behind the
          word mountains, far from the countries Vokalia and Consonantia, there
          live the blind texts.
        </Text>
        <Heading variant="subheading">
          Silent delightfully including because before one up barring chameleon
        </Heading>
        <Text paragraph>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean. A small river named Duden flows by
          their place and supplies it with the necessary regelialia. It is a
          paradisematic country, in which roasted parts of sentences fly into
          your mouth.
        </Text>
        <Text paragraph>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar. The Big Oxmox advised her not to do so, because there were
          thousands of bad Commas, wild Question Marks and devious Semikoli, but
          the Little Blind Text didn’t listen.
        </Text>
        <Heading variant="subsubheading">
          Wherever far wow thus a squirrel raccoon jeez jaguar this from along
        </Heading>
        <Text paragraph>
          She packed her seven versalia, put her initial into the belt and made
          herself on the way. When she reached the first hills of the Italic
          Mountains, she had a last view back on the skyline of her hometown
          Bookmarksgrove, the headline of Alphabet Village and the subline of
          her own road, the Line Lane. Pityful a rethoric question ran over her
          cheek, then she continued her way. On her way she met a copy.
        </Text>
        <Heading variant="subsubheading">
          Slapped cozy a that lightheartedly and far
        </Heading>
        <Text paragraph>
          The copy warned the Little Blind Text, that where it came from it
          would have been rewritten a thousand times and everything that was
          left from its origin would be the word “and” and the Little Blind Text
          should turn around and return to its own, safe country. But nothing
          the copy said could convince her and so it didn’t take long until a
          few insidious Copy Writers ambushed her, made her drunk with Longe and
          Parole and dragged her into their agency, where they abused her for
          their projects again and again.
        </Text>
      </Section>
    </Mode>
    <div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Typography
