import {Client as Styletron} from 'styletron-engine-atomic'
import {Theme} from '../src'
import {defaultTheme} from '../src/utils'

export const contexts = [
  {
    icon: 'box', // a icon displayed in the Storybook toolbar to control contextual props
    title: 'Themes', // an unique name of a contextual environment
    components: [Theme],
    params: [
      // an array of params contains a set of predefined `props` for `components`
      {
        name: 'Default Theme',
        props: {theme: defaultTheme, engine: new Styletron()},
      },
      // { name: "Dark Theme", props: { theme: darkTheme } }
    ],
    options: {
      deep: true, // pass the `props` deeply into all wrapping components
      disable: false, // disable this contextual environment completely
      cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
    },
  },
]
