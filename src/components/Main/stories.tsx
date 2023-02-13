import { Story, Meta } from '@storybook/react/types-6-0'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Nulla porttitor accumsan',
    description: 'Vivamus suscipit tortor eget felis porttitor volutpat.',
  },
} as Meta

export const Basic: Story = (args) => <Main {...args} />

Basic.args = {
  title: 'React Avançado',
  description: 'TypeScript, ReactJS, NextJS e Styled Components',
}
