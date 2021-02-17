import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';

import { allFlattenRoutes as allRoutes } from './app/configs/routesConfig';

function Routes(props) {
  return (
    <Suspense fallback={<div>Loading M&M..</div>}>
      <Switch>
        {allRoutes.map((route, index) => {
          return (
            !route.children && (
              <route.route
                key={index}
                path={route.path}
                exact={!!route.exact}
                component={props => {
                  return (
                    <route.layout>
                      <route.component {...props} />
                    </route.layout>
                  );
                }}
              ></route.route>
            )
          );
        })}
        {/* <Route
          component={() => (
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                color: '#ffffff',
                zIndex: '1000',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0',
                left: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h1>404 - ¡No se encontró!</h1>
              <Link to="/">Home</Link>
            </div>
          )}
        /> */}
      </Switch>
    </Suspense>
  );
}

export default Routes;
