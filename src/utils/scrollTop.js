import {scroll} from 'quasar';

const {getScrollTarget, setScrollPosition} = scroll;

export default function scrollToElement(elementId) {
  const target = getScrollTarget(elementId);
  const offset = elementId.offsetTop;
  const duration = 300;
  setScrollPosition(target, offset, duration)
}
