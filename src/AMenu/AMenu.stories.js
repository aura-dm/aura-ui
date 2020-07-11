import AMenu from './';
import AMenuItem from '../AMenuItem';

export default { title: 'Menu' };

export const menu = () => ({
  components: { AMenu, AMenuItem },
  template: `
    <a-menu>
      <a-menu-item>Menu Item 1</a-menu-item>
      <a-menu-item>Menu Item 2</a-menu-item>
      <a-menu-item>Menu Item 3</a-menu-item>
    </a-menu>
  `,
});
