import { ACheckCircleIcon, AMoreIcon } from '../icons';
import AImageCard from './';

export default { title: 'Image Card' };

export const Default = () => ({
  components: { AImageCard },
  template: `
    <div style="height: 200px; width: 300px;">
      <a-image-card
        image-url="https://cdn.dribbble.com/users/1536976/screenshots/9395436/media/26cdea2efc0adf570c2e94a9f8646fdd.png"
        title="Example Image Card"
      />
    </div>
  `,
});

export const withHover = () => ({
  components: { AImageCard },
  template: `
    <div style="height: 200px; width: 300px;">
      <a-image-card
        :enable-hover="true"
        image-url="https://cdn.dribbble.com/users/1536976/screenshots/9395436/media/26cdea2efc0adf570c2e94a9f8646fdd.png"
        title="Example Image Card"
      />
    </div>
  `,
});

export const withSubTitle = () => ({
  components: { ACheckCircleIcon, AImageCard, AMoreIcon },
  template: `
    <div style="height: 200px; width: 300px;">
      <a-image-card
        :enable-hover="true"
        image-url="https://cdn.dribbble.com/users/1536976/screenshots/9395436/media/26cdea2efc0adf570c2e94a9f8646fdd.png"
        sub-title="Example Sub Title"
        title="Example Image Card"
      >
        <template v-slot:controls>
          <span style="align-items: center; display: flex;">
            <a-check-circle-icon /> 12
            <a-more-icon @click="() => alert('click')" style="margin: 0 0 0 10px" />
          </span>
        </template>
      </a-image-card>
    </div>
  `,
});
