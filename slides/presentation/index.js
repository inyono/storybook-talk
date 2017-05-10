// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Image,
  Text
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  serlo: require('../assets/serlo_logo.svg')
};

preloader(images);

const theme = createTheme(
  {
    primary: '#F8F8F8',
    secondary: '#404040',
    tertiary: '#007EC1',
    quartenary: '#95bc1a'
  },
  {
    primary: "'Open Sans'"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Image
            src="data:image/png;base64,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"
            width={500}
          />
          <Text margin="10px 0 0" textColor="secondary" bold>
            Jonas Keinholz
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            About me
          </Heading>
          <Link href="https://de.serlo.org">
            <Image src={images.serlo} width={500} />
          </Link>
          <List textColor="secondary" style={{ listStylePosition: 'outside' }}>
            <ListItem>
              <Link
                href="https://github.com/serlo-org/serlo-abc"
                textColor="tertiary"
              >
                Serlo ABC
              </Link>
              ,
              a free literacy app written in React Native
            </ListItem>
            <ListItem>
              <Link href="http://editor.ory.am/" textColor="tertiary">
                ORY Editor
              </Link>
              ,
              an extensible, modern WYSI editor for the web written in React
            </ListItem>
          </List>
          <Text textColor="secondary">
            Check me out on{' '}
            <Link href="https://github.com/inyono" textColor="tertiary">
              <i className="fa fa-github" aria-hidden="true" />
            </Link>
            {' '}
            <Link href="https://medium.com/@inyono" textColor="tertiary">
              <i className="fa fa-medium" aria-hidden="true" />
            </Link>
            {' '}
            <Link href="https://twitter.com/inyono" textColor="tertiary">
              <i className="fa fa-twitter" aria-hidden="true" />
            </Link>
            {' '}
            (inyono)
          </Text>
        </Slide>
        <Slide bgColor="primary" align="center flex-start">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Life without Storybook
          </Heading>
          <div
            style={{
              width: '375px',
              height: '568px',
              margin: '0 auto',
              marginTop: '80px',
              boxShadow: '0 0 0 29px #404040',
              borderRadius: '10px'
            }}
          >
            <iframe
              src="http://inyono.github.io/storybook-talk/cuteify"
              style={{ border: 'none', width: '100%', height: '100%' }}
            />
          </div>
        </Slide>
        <Slide bgColor="primary" align="center flex-start">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Storybook to the rescue
          </Heading>
          <div
            style={{
              height: '100%',
              height: '568px',
              marginTop: '80px',
              boxShadow: '0 0 0 29px #404040',
              borderRadius: '10px'
            }}
          >
            <iframe
              src="http://inyono.github.io/storybook-talk/cuteify/storybook"
              style={{ border: 'none', width: '100%', height: '100%' }}
            />
          </div>
        </Slide>
        <Slide bgColor="primary" align="center flex-start">
          <Heading size={1} lineHeight={1} fit textColor="secondary">
            Why is this awesome?
          </Heading>
          <List textColor="secondary" style={{ listStylePosition: 'outside' }}>
            <ListItem>
              Seperates your dummy code used solely for testing from your production app (especially good for React Native and Electron)
            </ListItem>
            <ListItem>
              Encourages you to write reusable components and think about the API first (similar to TDD)
            </ListItem>
            <ListItem>
              Stories serve as documentation for your components
            </ListItem>
            <ListItem>
              Designers can view the components easily and give the devs feedback
            </ListItem>
            <ListItem>
              Devs can work independently from each other
            </ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/stories")}
          ranges={[
              { loc: [0, 270], title: 'Show me code!' },
              { loc: [19, 21], note: 'Story for the default entry of our app' },
              { loc: [22, 30], note: 'First story for the account data' },
              { loc: [17, 18], note: 'Mock callbacks using `action`'},
              { loc: [30, 36], note: 'Second story for the account data step' },
              { loc: [36, 46], note: 'Third story for the account data step' },
              { loc: [9, 16], note: 'Wrap all stories (because Material UI)' },
              { loc: [1, 2] }
          ]}
        />
        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            More examples
          </Heading>
          <List textColor="secondary" style={{ listStylePosition: 'outside' }}>
            <ListItem>
              <Link href="https://necolas.github.io/react-native-web/" textColor="tertiary">React Native for Web</Link> (React Storybook)
            </ListItem>
            <ListItem>
              <Link href="http://airbnb.io/react-dates/" textColor="tertiary">react-dates</Link> (React Storybook)
            </ListItem>
            <ListItem>
              <Link href="https://github.com/serlo-org/serlo-abc" textColor="tertiary">Serlo ABC</Link> (React Native Storybook)
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Setup (React Storybook)
          </Heading>
          <Text textColor="secondary" style={{ marginTop: '20px' }}>In an existing React app:</Text>
          <List textColor="secondary" style={{ listStylePosition: 'outside' }}>
            <ListItem>
              <Code>npm install --global getstorybook</Code>
            </ListItem>
            <ListItem>
              <Code>cd my-react-app</Code>
            </ListItem>
            <ListItem>
              <Code>getstorybook</Code>
            </ListItem>
          </List>
          <List textColor="secondary"  style={{ listStylePosition: 'outside' }}>
            <ListItem>
              Start your Storybook with <Code>npm run storybook</Code> (possibly in parallel to your real app)
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Setup (React Native Storybook)
          </Heading>
          <Text textColor="secondary" style={{ marginTop: '20px' }}>In an existing (vanilla) React Native app:</Text>
          <List textColor="secondary" style={{ listStylePosition: 'outside' }}>
            <ListItem>
              <Code>npm install --global getstorybook</Code>
            </ListItem>
            <ListItem>
              <Code>cd my-react-native-app</Code>
            </ListItem>
            <ListItem>
              <Code>getstorybook</Code>
            </ListItem>
          </List>
          <List textColor="secondary" style={{ listStylePosition: 'outside' }}>
            <ListItem>
              Start your Storybook with <Code>npm run storybook</Code> (replaces the React Native packager)
            </ListItem>
            <ListItem>
              Start your app, e.g. with <Code>react-native run-ios</Code>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Setup (Create React Native App)
          </Heading>
          <Text textColor="secondary" style={{ marginTop: '20px' }}>
            For setting up React Native Storybook in a Create React Native App or Expo app,
            see <Link textColor="tertiary" href="https://medium.com/@inyono/using-react-native-storybook-with-create-react-native-app-471e531bb128">my blog post</Link>
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Storybook Addons
          </Heading>
          <Text textColor="secondary" style={{ marginTop: '20px' }}>
            See <Link textColor="tertiary" href="https://storybooks.js.org/docs/react-storybook/addons/addon-gallery/">Addon Gallery</Link>
          </Text>
          <List textColor="secondary" style={{ listStylePosition: 'outside' }}>
            <ListItem>
              <Link textColor="tertiary" href="https://github.com/storybooks/storybook/tree/master/packages/storyshots">
                StoryShots
              </Link>:
              create Jest Snapshots from stories
            </ListItem>
            <ListItem>
              <Link textColor="tertiary" href="https://github.com/storybooks/storybook/tree/master/packages/addon-knobs">
                Knobs
              </Link>:
              edit React props dynamically using in the Storybook UI
            </ListItem>
            <ListItem>
              <Link textColor="tertiary" href="https://github.com/storybooks/storybook/tree/master/packages/addon-notes">
                Notes
              </Link> and{' '}
              <Link textColor="tertiary" href="https://github.com/storybooks/storybook/tree/master/packages/addon-info">
                Info
              </Link>:
              show additional information for your stories
            </ListItem>
          </List>
          <Text textColor="secondary">Disclaimer: unfortunately, a couple of addons don't work with React Native Storybook</Text>
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Thanks for listening!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
