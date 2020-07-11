import ASelect from './';

export default { title: 'Select Menu' };

export const selectMenu = () => ({
  components: { ASelect },
  methods: {
    onSelect(id) {
      console.log(id);
    },
  },
  template: `
    <a-select
      :items="[
        {
          id: 'item1',
          label: 'Item 1',
        },
        {
          id: 'item2',
          label: 'Item 2',
        },
        {
          id: 'item3',
          label: 'Item 3',
        }
      ]"
      @select="onSelect"
    />
  `,
});
