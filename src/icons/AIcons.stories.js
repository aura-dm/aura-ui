import AAddIcon from './AAddIcon';
import AArrowBackIcon from './AArrowBackIcon';
import ABlockIcon from './ABlockIcon';
import ACheckCircleIcon from './ACheckCircleIcon';
import ACheckIcon from './ACheckIcon';
import ACloseIcon from './ACloseIcon';
import ACreateIcon from './ACreateIcon';
import AErrorIcon from './AErrorIcon';
import AInfoIcon from './AInfoIcon';
import AListIcon from './AListIcon';
import ALogoutIcon from './ALogoutIcon';
import AMenuIcon from './AMenuIcon';
import AMoreIcon from './AMoreIcon';
import ARemoveIcon from './ARemoveIcon';

export default { title: 'Icons' };

const container = `
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 20px 30px 0;
  width: 120px;
`;

const text = `
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  margin: 10px 0 0;
`;

export const icons = () => ({
  components: {
    AAddIcon,
    AArrowBackIcon,
    ABlockIcon,
    ACheckCircleIcon,
    ACheckIcon,
    ACloseIcon,
    ACreateIcon,
    AErrorIcon,
    AInfoIcon,
    AListIcon,
    ALogoutIcon,
    AMenuIcon,
    AMoreIcon,
    ARemoveIcon,
  },
  template: `
    <div style="display: flex; flex-wrap: wrap; width: 700px;">
      <div style="${container}">
        <a-add-icon />
        <span style="${text}">a-add-icon</span>
      </div>
      <div style="${container}">
        <a-arrow-back-icon />
        <span style="${text}">a-arrow-back</span>
      </div>
      <div style="${container}">
        <a-block-icon />
        <span style="${text}">a-block-icon</span>
      </div>
      <div style="${container}">
        <a-check-circle-icon />
        <span style="${text}">a-check-circle-icon</span>
      </div>
      <div style="${container}">
        <a-check-icon />
        <span style="${text}">a-check-icon</span>
      </div>
      <div style="${container}">
        <a-close-icon />
        <span style="${text}">a-close-icon</span>
      </div>
      <div style="${container}">
        <a-create-icon />
        <span style="${text}">a-create-icon</span>
      </div>
      <div style="${container}">
        <a-error-icon />
        <span style="${text}">a-error-icon</span>
      </div>
      <div style="${container}">
        <a-info-icon />
        <span style="${text}">a-info-icon</span>
      </div>
      <div style="${container}">
        <a-list-icon />
        <span style="${text}">a-list-icon</span>
      </div>
      <div style="${container}">
        <a-logout-icon />
        <span style="${text}">a-logout-icon</span>
      </div>
      <div style="${container}">
        <a-menu-icon />
        <span style="${text}">a-menu-icon</span>
      </div>
      <div style="${container}">
        <a-more-icon />
        <span style="${text}">a-more-icon</span>
      </div>
      <div style="${container}">
        <a-remove-icon />
        <span style="${text}">a-remove-icon</span>
      </div>
    </div>
  `,
});
