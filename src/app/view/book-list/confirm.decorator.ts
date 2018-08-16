import {ConfirmationService} from 'primeng/api';
import { ToolkitModule } from '../../toolkit.module';

interface ConfirmOption {
  detectComment: boolean;
  visibleComment: boolean;
}

export function Confirm(option: Partial<ConfirmOption> = {}) {
  const { detectComment, visibleComment } = option;
  return (target, key, descriptor) => {

    if (descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, key);
    }

    const originalMethod = descriptor.value;

    descriptor.value = function () {
      const args = Array.prototype.slice.call(arguments);
      const confirmationService = ToolkitModule.injector.get(ConfirmationService);
      confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
          originalMethod.apply(this, args);
        }
      });
    };

    return descriptor;
  };
}
