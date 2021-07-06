import AAddIcon from '../icons/AAddIcon';
import AButton from '../AButton';
import AMessagePanel from './';

export default { title: 'Message Panel' };

export const Default = () => ({
  components: { AAddIcon, AButton, AMessagePanel },
  template: `
    <div style="background-color: #eeeeee; height: 400px; position: relative; width: 600px;">
      <a-message-panel text="You don't have any stuff!">
        <a-button :is-primary="true">
          Add some stuff?
        </a-button>
      </a-message-panel>
    </div>
  `,
});
