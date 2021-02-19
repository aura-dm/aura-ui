import ABreadcrumb from './';

export default { title: 'Breadcrumb' };

const ABreadcrumbItem = ABreadcrumb.Item;

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { ABreadcrumb, ABreadcrumbItem },
  props: Object.keys(argTypes),
  template:
    '<a-breadcrumb><a-breadcrumb-item>Test</a-breadcrumb-item></a-breadcrumb>',
});

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  template:
    '<a-breadcrumb><a-breadcrumb-item>Test</a-breadcrumb-item></a-breadcrumb>',
};
