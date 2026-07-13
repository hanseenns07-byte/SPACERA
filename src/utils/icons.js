// Maps the string icon names used in the data layer to concrete React Icon
// components. Keeping this lookup in one place lets the JSON stay free of
// framework imports and makes swapping icon sets trivial.

import {
  FiMessageCircle,
  FiMap,
  FiDollarSign,
  FiEdit3,
  FiEye,
  FiHome,
  FiGrid,
  FiMaximize,
  FiLayers,
  FiPenTool,
  FiRefreshCw,
  FiTool,
  FiTruck,
  FiCheckCircle,
} from "react-icons/fi";

const map = {
  consult: FiMessageCircle,
  survey: FiMap,
  budget: FiDollarSign,
  custom: FiEdit3,
  process: FiEye,
  interior: FiHome,
  furniture: FiGrid,
  space: FiMaximize,
  render: FiLayers,
  material: FiPenTool,
  concept: FiPenTool,
  revision: FiRefreshCw,
  production: FiTool,
  install: FiTruck,
  check: FiCheckCircle,
};

export function getIcon(name) {
  return map[name] || FiCheckCircle;
}

export default getIcon;
