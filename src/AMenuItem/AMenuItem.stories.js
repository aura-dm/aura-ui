import AAddIcon from '../icons/AAddIcon';
import AListIcon from '../icons/AListIcon';
import AMenu from '../AMenu';
import AMenuItem from './';

export default { title: 'MenuItem' };

export const MenuItems = () => ({
  components: { AAddIcon, AListIcon, AMenu, AMenuItem },
  template: `
    <div style="width: 280px;">
      <a-menu>
        <a-menu-item component="a" :is-active="true">
          <template v-slot:icon-left>
            <a-list-icon />
          </template>
          Item 1
        </a-menu-item>
        <a-menu-item component="a">
          Item 2
          <template v-slot:icon-right>
            <a-add-icon />
          </template>
        </a-menu-item>
        <a-menu-item component="a">Item 3</a-menu-item>
      </a-menu>
    </div>
  `,
});

export const CustomActiveClass = () => ({
  components: { AMenu, AMenuItem },
  template: `
    <div style="width: 280px;">
      <a-menu>
        <a-menu-item
          active-class="active"
          component="a"
        >
          Item 1
        </a-menu-item>
        <a-menu-item
          active-class="active"
          class="active"
          component="a"
        >
          Item 2
        </a-menu-item>
        <a-menu-item
          active-class="active"
          component="a"
        >
          Item 3
        </a-menu-item>
      </a-menu>
    </div>
  `,
});

export const WithSubMenu = () => ({
  components: { AMenu, AMenuItem },
  template: `
    <div style="width: 280px;">
      <a-menu>
        <a-menu-item
          active-class="active"
          component="a"
        >
          Item 1
        </a-menu-item>
        <a-menu-item :is-sub-menu-title="true">Sub Menu Title</a-menu-item>
        <a-menu>
          <a-menu-item
            active-class="active"
            class="active"
            component="a"
            :is-sub-menu="true"
          >
            Item 2
          </a-menu-item>
          <a-menu-item
            active-class="active"
            component="a"
            :is-sub-menu="true"
          >
            Item 3
          </a-menu-item>
        </a-menu>
        <a-menu-item
          active-class="active"
          component="a"
        >
          Item 2
        </a-menu-item>
      </a-menu>
    </div>
  `,
});
