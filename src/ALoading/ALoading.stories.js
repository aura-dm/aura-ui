import ALoading from './';

export default { title: 'Loading' };

export const loading = () => ({
  components: { ALoading },
  template: `
    <div style="background-color: #eeeeee; height: 300px; position: relative; width: 500px;">
      <a-loading />
    </div>
  `,
});
