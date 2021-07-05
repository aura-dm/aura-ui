import ALoading from './';

export default { title: 'Loading' };

export const Default = () => ({
  components: { ALoading },
  template: `
    <div style="background-color: #eeeeee; height: 400px; position: relative; width: 600px;">
      <a-loading />
    </div>
  `,
});
