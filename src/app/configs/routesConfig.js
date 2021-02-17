import { HomeConfig } from '../main/home/homeConfig';

// Todas las rutas acopladas
const allRoutes = [...HomeConfig];

// Helper
const flattenRoutes = routes => {
  let flatRoutes = [];

  routes = routes || [];
  routes.forEach(item => {
    flatRoutes.push(item);

    if (typeof item.children !== 'undefined') {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};

const allFlattenRoutes = flattenRoutes(allRoutes);

export { allFlattenRoutes };
