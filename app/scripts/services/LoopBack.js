(function (window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  /**
   * @ngdoc overview
   * @name LoopBack
   * @module
   * @description
   *
   * The `LoopBack` module provides services for interacting with
   * the models exposed by the LoopBack server via the REST API.
   *
   */
  var module = angular.module("LoopBack", ['ngResource']);

  /**
   * @ngdoc object
   * @name LoopBack.RoleMapping
   * @header LoopBack.RoleMapping
   * @object
   *
   * @description
   *
   * A $resource object for interacting with the `RoleMapping` model.
   *
   * ## Example
   *
   * See
   * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
   * for an example of using this object.
   *
   */
  module.factory(
    "RoleMapping", ['LoopBackResource', 'LoopBackAuth', '$injector', function (Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + "/RoleMappings/:id", {
          'id': '@id'
        }, {

          // INTERNAL. Use RoleMapping.role() instead.
          "prototype$__get__role": {
            url: urlBase + "/RoleMappings/:id/role",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.RoleMapping#create
           * @methodOf LoopBack.RoleMapping
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `RoleMapping` object.)
           * </em>
           */
          "create": {
            url: urlBase + "/RoleMappings",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.RoleMapping#createMany
           * @methodOf LoopBack.RoleMapping
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `RoleMapping` object.)
           * </em>
           */
          "createMany": {
            isArray: true,
            url: urlBase + "/RoleMappings",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.RoleMapping#upsert
           * @methodOf LoopBack.RoleMapping
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `RoleMapping` object.)
           * </em>
           */
          "upsert": {
            url: urlBase + "/RoleMappings",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name LoopBack.RoleMapping#exists
           * @methodOf LoopBack.RoleMapping
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` - 
           */
          "exists": {
            url: urlBase + "/RoleMappings/:id/exists",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.RoleMapping#findById
           * @methodOf LoopBack.RoleMapping
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `RoleMapping` object.)
           * </em>
           */
          "findById": {
            url: urlBase + "/RoleMappings/:id",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.RoleMapping#find
           * @methodOf LoopBack.RoleMapping
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `RoleMapping` object.)
           * </em>
           */
          "find": {
            isArray: true,
            url: urlBase + "/RoleMappings",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.RoleMapping#findOne
           * @methodOf LoopBack.RoleMapping
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `RoleMapping` object.)
           * </em>
           */
          "findOne": {
            url: urlBase + "/RoleMappings/findOne",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.RoleMapping#updateAll
           * @methodOf LoopBack.RoleMapping
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * The number of instances updated
           */
          "updateAll": {
            url: urlBase + "/RoleMappings/update",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.RoleMapping#deleteById
           * @methodOf LoopBack.RoleMapping
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `RoleMapping` object.)
           * </em>
           */
          "deleteById": {
            url: urlBase + "/RoleMappings/:id",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name LoopBack.RoleMapping#count
           * @methodOf LoopBack.RoleMapping
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` - 
           */
          "count": {
            url: urlBase + "/RoleMappings/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.RoleMapping#prototype$updateAttributes
           * @methodOf LoopBack.RoleMapping
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `RoleMapping` object.)
           * </em>
           */
          "prototype$updateAttributes": {
            url: urlBase + "/RoleMappings/:id",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name LoopBack.RoleMapping#createChangeStream
           * @methodOf LoopBack.RoleMapping
           *
           * @description
           *
           * Create a change stream.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `changes` – `{ReadableStream=}` - 
           */
          "createChangeStream": {
            url: urlBase + "/RoleMappings/change-stream",
            method: "POST"
          },

          // INTERNAL. Use Role.principals.findById() instead.
          "::findById::Role::principals": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Roles/:id/principals/:fk",
            method: "GET"
          },

          // INTERNAL. Use Role.principals.destroyById() instead.
          "::destroyById::Role::principals": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Roles/:id/principals/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use Role.principals.updateById() instead.
          "::updateById::Role::principals": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Roles/:id/principals/:fk",
            method: "PUT"
          },

          // INTERNAL. Use Role.principals() instead.
          "::get::Role::principals": {
            isArray: true,
            url: urlBase + "/Roles/:id/principals",
            method: "GET"
          },

          // INTERNAL. Use Role.principals.create() instead.
          "::create::Role::principals": {
            url: urlBase + "/Roles/:id/principals",
            method: "POST"
          },

          // INTERNAL. Use Role.principals.createMany() instead.
          "::createMany::Role::principals": {
            isArray: true,
            url: urlBase + "/Roles/:id/principals",
            method: "POST"
          },

          // INTERNAL. Use Role.principals.destroyAll() instead.
          "::delete::Role::principals": {
            url: urlBase + "/Roles/:id/principals",
            method: "DELETE"
          },

          // INTERNAL. Use Role.principals.count() instead.
          "::count::Role::principals": {
            url: urlBase + "/Roles/:id/principals/count",
            method: "GET"
          },
        }
      );

      /**
       * @ngdoc method
       * @name LoopBack.RoleMapping#updateOrCreate
       * @methodOf LoopBack.RoleMapping
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `RoleMapping` object.)
       * </em>
       */
      R["updateOrCreate"] = R["upsert"];

      /**
       * @ngdoc method
       * @name LoopBack.RoleMapping#update
       * @methodOf LoopBack.RoleMapping
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * The number of instances updated
       */
      R["update"] = R["updateAll"];

      /**
       * @ngdoc method
       * @name LoopBack.RoleMapping#destroyById
       * @methodOf LoopBack.RoleMapping
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `RoleMapping` object.)
       * </em>
       */
      R["destroyById"] = R["deleteById"];

      /**
       * @ngdoc method
       * @name LoopBack.RoleMapping#removeById
       * @methodOf LoopBack.RoleMapping
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `RoleMapping` object.)
       * </em>
       */
      R["removeById"] = R["deleteById"];

      /**
       * @ngdoc property
       * @name LoopBack.RoleMapping#modelName
       * @propertyOf LoopBack.RoleMapping
       * @description
       * The name of the model represented by this $resource,
       * i.e. `RoleMapping`.
       */
      R.modelName = "RoleMapping";

      /**
       * @ngdoc method
       * @name LoopBack.RoleMapping#role
       * @methodOf LoopBack.RoleMapping
       *
       * @description
       *
       * Fetches belongsTo relation role.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       *  - `refresh` – `{boolean=}` - 
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Role` object.)
       * </em>
       */
      R.role = function () {
        var TargetResource = $injector.get("Role");
        var action = TargetResource["::get::RoleMapping::role"];
        return action.apply(R, arguments);
      };

      return R;
    }]);

  /**
   * @ngdoc object
   * @name LoopBack.Role
   * @header LoopBack.Role
   * @object
   *
   * @description
   *
   * A $resource object for interacting with the `Role` model.
   *
   * ## Example
   *
   * See
   * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
   * for an example of using this object.
   *
   */
  module.factory(
    "Role", ['LoopBackResource', 'LoopBackAuth', '$injector', function (Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + "/Roles/:id", {
          'id': '@id'
        }, {

          // INTERNAL. Use Role.principals.findById() instead.
          "prototype$__findById__principals": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Roles/:id/principals/:fk",
            method: "GET"
          },

          // INTERNAL. Use Role.principals.destroyById() instead.
          "prototype$__destroyById__principals": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Roles/:id/principals/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use Role.principals.updateById() instead.
          "prototype$__updateById__principals": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Roles/:id/principals/:fk",
            method: "PUT"
          },

          // INTERNAL. Use Role.principals() instead.
          "prototype$__get__principals": {
            isArray: true,
            url: urlBase + "/Roles/:id/principals",
            method: "GET"
          },

          // INTERNAL. Use Role.principals.create() instead.
          "prototype$__create__principals": {
            url: urlBase + "/Roles/:id/principals",
            method: "POST"
          },

          // INTERNAL. Use Role.principals.destroyAll() instead.
          "prototype$__delete__principals": {
            url: urlBase + "/Roles/:id/principals",
            method: "DELETE"
          },

          // INTERNAL. Use Role.principals.count() instead.
          "prototype$__count__principals": {
            url: urlBase + "/Roles/:id/principals/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Role#create
           * @methodOf LoopBack.Role
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Role` object.)
           * </em>
           */
          "create": {
            url: urlBase + "/Roles",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Role#createMany
           * @methodOf LoopBack.Role
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Role` object.)
           * </em>
           */
          "createMany": {
            isArray: true,
            url: urlBase + "/Roles",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Role#upsert
           * @methodOf LoopBack.Role
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Role` object.)
           * </em>
           */
          "upsert": {
            url: urlBase + "/Roles",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Role#exists
           * @methodOf LoopBack.Role
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` - 
           */
          "exists": {
            url: urlBase + "/Roles/:id/exists",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Role#findById
           * @methodOf LoopBack.Role
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Role` object.)
           * </em>
           */
          "findById": {
            url: urlBase + "/Roles/:id",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Role#find
           * @methodOf LoopBack.Role
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Role` object.)
           * </em>
           */
          "find": {
            isArray: true,
            url: urlBase + "/Roles",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Role#findOne
           * @methodOf LoopBack.Role
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Role` object.)
           * </em>
           */
          "findOne": {
            url: urlBase + "/Roles/findOne",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Role#updateAll
           * @methodOf LoopBack.Role
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * The number of instances updated
           */
          "updateAll": {
            url: urlBase + "/Roles/update",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Role#deleteById
           * @methodOf LoopBack.Role
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Role` object.)
           * </em>
           */
          "deleteById": {
            url: urlBase + "/Roles/:id",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Role#count
           * @methodOf LoopBack.Role
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` - 
           */
          "count": {
            url: urlBase + "/Roles/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Role#prototype$updateAttributes
           * @methodOf LoopBack.Role
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Role` object.)
           * </em>
           */
          "prototype$updateAttributes": {
            url: urlBase + "/Roles/:id",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Role#createChangeStream
           * @methodOf LoopBack.Role
           *
           * @description
           *
           * Create a change stream.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `changes` – `{ReadableStream=}` - 
           */
          "createChangeStream": {
            url: urlBase + "/Roles/change-stream",
            method: "POST"
          },

          // INTERNAL. Use RoleMapping.role() instead.
          "::get::RoleMapping::role": {
            url: urlBase + "/RoleMappings/:id/role",
            method: "GET"
          },

          // INTERNAL. Use User.roles.findById() instead.
          "::findById::user::roles": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/roles/:fk",
            method: "GET"
          },

          // INTERNAL. Use User.roles.destroyById() instead.
          "::destroyById::user::roles": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/roles/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use User.roles.updateById() instead.
          "::updateById::user::roles": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/roles/:fk",
            method: "PUT"
          },

          // INTERNAL. Use User.roles.link() instead.
          "::link::user::roles": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/roles/rel/:fk",
            method: "PUT"
          },

          // INTERNAL. Use User.roles.unlink() instead.
          "::unlink::user::roles": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/roles/rel/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use User.roles.exists() instead.
          "::exists::user::roles": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/roles/rel/:fk",
            method: "HEAD"
          },

          // INTERNAL. Use User.roles() instead.
          "::get::user::roles": {
            isArray: true,
            url: urlBase + "/users/:id/roles",
            method: "GET"
          },

          // INTERNAL. Use User.roles.create() instead.
          "::create::user::roles": {
            url: urlBase + "/users/:id/roles",
            method: "POST"
          },

          // INTERNAL. Use User.roles.createMany() instead.
          "::createMany::user::roles": {
            isArray: true,
            url: urlBase + "/users/:id/roles",
            method: "POST"
          },

          // INTERNAL. Use User.roles.destroyAll() instead.
          "::delete::user::roles": {
            url: urlBase + "/users/:id/roles",
            method: "DELETE"
          },

          // INTERNAL. Use User.roles.count() instead.
          "::count::user::roles": {
            url: urlBase + "/users/:id/roles/count",
            method: "GET"
          },
        }
      );

      /**
       * @ngdoc method
       * @name LoopBack.Role#updateOrCreate
       * @methodOf LoopBack.Role
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Role` object.)
       * </em>
       */
      R["updateOrCreate"] = R["upsert"];

      /**
       * @ngdoc method
       * @name LoopBack.Role#update
       * @methodOf LoopBack.Role
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * The number of instances updated
       */
      R["update"] = R["updateAll"];

      /**
       * @ngdoc method
       * @name LoopBack.Role#destroyById
       * @methodOf LoopBack.Role
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Role` object.)
       * </em>
       */
      R["destroyById"] = R["deleteById"];

      /**
       * @ngdoc method
       * @name LoopBack.Role#removeById
       * @methodOf LoopBack.Role
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Role` object.)
       * </em>
       */
      R["removeById"] = R["deleteById"];

      /**
       * @ngdoc property
       * @name LoopBack.Role#modelName
       * @propertyOf LoopBack.Role
       * @description
       * The name of the model represented by this $resource,
       * i.e. `Role`.
       */
      R.modelName = "Role";

      /**
       * @ngdoc object
       * @name LoopBack.Role.principals
       * @header LoopBack.Role.principals
       * @object
       * @description
       *
       * The object `Role.principals` groups methods
       * manipulating `RoleMapping` instances related to `Role`.
       *
       * Call {@link LoopBack.Role#principals Role.principals()}
       * to query all related instances.
       */

      /**
       * @ngdoc method
       * @name LoopBack.Role#principals
       * @methodOf LoopBack.Role
       *
       * @description
       *
       * Queries principals of Role.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       *  - `filter` – `{object=}` - 
       *
       * @param {function(Array.<Object>,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Array.<Object>} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `RoleMapping` object.)
       * </em>
       */
      R.principals = function () {
        var TargetResource = $injector.get("RoleMapping");
        var action = TargetResource["::get::Role::principals"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.Role.principals#count
       * @methodOf LoopBack.Role.principals
       *
       * @description
       *
       * Counts principals of Role.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * Data properties:
       *
       *  - `count` – `{number=}` - 
       */
      R.principals.count = function () {
        var TargetResource = $injector.get("RoleMapping");
        var action = TargetResource["::count::Role::principals"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.Role.principals#create
       * @methodOf LoopBack.Role.principals
       *
       * @description
       *
       * Creates a new instance in principals of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `RoleMapping` object.)
       * </em>
       */
      R.principals.create = function () {
        var TargetResource = $injector.get("RoleMapping");
        var action = TargetResource["::create::Role::principals"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.Role.principals#createMany
       * @methodOf LoopBack.Role.principals
       *
       * @description
       *
       * Creates a new instance in principals of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Array.<Object>,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Array.<Object>} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `RoleMapping` object.)
       * </em>
       */
      R.principals.createMany = function () {
        var TargetResource = $injector.get("RoleMapping");
        var action = TargetResource["::createMany::Role::principals"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.Role.principals#destroyAll
       * @methodOf LoopBack.Role.principals
       *
       * @description
       *
       * Deletes all principals of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.principals.destroyAll = function () {
        var TargetResource = $injector.get("RoleMapping");
        var action = TargetResource["::delete::Role::principals"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.Role.principals#destroyById
       * @methodOf LoopBack.Role.principals
       *
       * @description
       *
       * Delete a related item by id for principals.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       *  - `fk` – `{*}` - Foreign key for principals
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.principals.destroyById = function () {
        var TargetResource = $injector.get("RoleMapping");
        var action = TargetResource["::destroyById::Role::principals"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.Role.principals#findById
       * @methodOf LoopBack.Role.principals
       *
       * @description
       *
       * Find a related item by id for principals.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       *  - `fk` – `{*}` - Foreign key for principals
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `RoleMapping` object.)
       * </em>
       */
      R.principals.findById = function () {
        var TargetResource = $injector.get("RoleMapping");
        var action = TargetResource["::findById::Role::principals"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.Role.principals#updateById
       * @methodOf LoopBack.Role.principals
       *
       * @description
       *
       * Update a related item by id for principals.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       *  - `fk` – `{*}` - Foreign key for principals
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `RoleMapping` object.)
       * </em>
       */
      R.principals.updateById = function () {
        var TargetResource = $injector.get("RoleMapping");
        var action = TargetResource["::updateById::Role::principals"];
        return action.apply(R, arguments);
      };

      return R;
    }]);

  /**
   * @ngdoc object
   * @name LoopBack.User
   * @header LoopBack.User
   * @object
   *
   * @description
   *
   * A $resource object for interacting with the `User` model.
   *
   * ## Example
   *
   * See
   * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
   * for an example of using this object.
   *
   */
  module.factory(
    "User", ['LoopBackResource', 'LoopBackAuth', '$injector', function (Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + "/users/:id", {
          'id': '@id'
        }, {

          // INTERNAL. Use User.roles.findById() instead.
          "prototype$__findById__roles": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/roles/:fk",
            method: "GET"
          },

          // INTERNAL. Use User.roles.destroyById() instead.
          "prototype$__destroyById__roles": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/roles/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use User.roles.updateById() instead.
          "prototype$__updateById__roles": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/roles/:fk",
            method: "PUT"
          },

          // INTERNAL. Use User.roles.link() instead.
          "prototype$__link__roles": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/roles/rel/:fk",
            method: "PUT"
          },

          // INTERNAL. Use User.roles.unlink() instead.
          "prototype$__unlink__roles": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/roles/rel/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use User.roles.exists() instead.
          "prototype$__exists__roles": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/roles/rel/:fk",
            method: "HEAD"
          },

          // INTERNAL. Use User.accessTokens.findById() instead.
          "prototype$__findById__accessTokens": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/accessTokens/:fk",
            method: "GET"
          },

          // INTERNAL. Use User.accessTokens.destroyById() instead.
          "prototype$__destroyById__accessTokens": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/accessTokens/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use User.accessTokens.updateById() instead.
          "prototype$__updateById__accessTokens": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/accessTokens/:fk",
            method: "PUT"
          },

          // INTERNAL. Use User.roles() instead.
          "prototype$__get__roles": {
            isArray: true,
            url: urlBase + "/users/:id/roles",
            method: "GET"
          },

          // INTERNAL. Use User.roles.create() instead.
          "prototype$__create__roles": {
            url: urlBase + "/users/:id/roles",
            method: "POST"
          },

          // INTERNAL. Use User.roles.destroyAll() instead.
          "prototype$__delete__roles": {
            url: urlBase + "/users/:id/roles",
            method: "DELETE"
          },

          // INTERNAL. Use User.roles.count() instead.
          "prototype$__count__roles": {
            url: urlBase + "/users/:id/roles/count",
            method: "GET"
          },

          // INTERNAL. Use User.accessTokens() instead.
          "prototype$__get__accessTokens": {
            isArray: true,
            url: urlBase + "/users/:id/accessTokens",
            method: "GET"
          },

          // INTERNAL. Use User.accessTokens.create() instead.
          "prototype$__create__accessTokens": {
            url: urlBase + "/users/:id/accessTokens",
            method: "POST"
          },

          // INTERNAL. Use User.accessTokens.destroyAll() instead.
          "prototype$__delete__accessTokens": {
            url: urlBase + "/users/:id/accessTokens",
            method: "DELETE"
          },

          // INTERNAL. Use User.accessTokens.count() instead.
          "prototype$__count__accessTokens": {
            url: urlBase + "/users/:id/accessTokens/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.User#create
           * @methodOf LoopBack.User
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          "create": {
            url: urlBase + "/users",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.User#createMany
           * @methodOf LoopBack.User
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          "createMany": {
            isArray: true,
            url: urlBase + "/users",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.User#upsert
           * @methodOf LoopBack.User
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          "upsert": {
            url: urlBase + "/users",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name LoopBack.User#exists
           * @methodOf LoopBack.User
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` - 
           */
          "exists": {
            url: urlBase + "/users/:id/exists",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.User#findById
           * @methodOf LoopBack.User
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          "findById": {
            url: urlBase + "/users/:id",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.User#find
           * @methodOf LoopBack.User
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          "find": {
            isArray: true,
            url: urlBase + "/users",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.User#findOne
           * @methodOf LoopBack.User
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          "findOne": {
            url: urlBase + "/users/findOne",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.User#updateAll
           * @methodOf LoopBack.User
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * The number of instances updated
           */
          "updateAll": {
            url: urlBase + "/users/update",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.User#deleteById
           * @methodOf LoopBack.User
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          "deleteById": {
            url: urlBase + "/users/:id",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name LoopBack.User#count
           * @methodOf LoopBack.User
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` - 
           */
          "count": {
            url: urlBase + "/users/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.User#prototype$updateAttributes
           * @methodOf LoopBack.User
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          "prototype$updateAttributes": {
            url: urlBase + "/users/:id",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name LoopBack.User#createChangeStream
           * @methodOf LoopBack.User
           *
           * @description
           *
           * Create a change stream.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `changes` – `{ReadableStream=}` - 
           */
          "createChangeStream": {
            url: urlBase + "/users/change-stream",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.User#login
           * @methodOf LoopBack.User
           *
           * @description
           *
           * Login a user with username/email and password.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
           *   Default value: `user`.
           *
           *  - `rememberMe` - `boolean` - Whether the authentication credentials
           *     should be remembered in localStorage across app/browser restarts.
           *     Default: `true`.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * The response body contains properties of the AccessToken created on login.
           * Depending on the value of `include` parameter, the body may contain additional properties:
           * 
           *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
           * 
           *
           */
          "login": {
            params: {
              include: "user"
            },
            interceptor: {
              response: function (response) {
                var accessToken = response.data;
                LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
                LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
                LoopBackAuth.save();
                return response.resource;
              }
            },
            url: urlBase + "/users/login",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.User#logout
           * @methodOf LoopBack.User
           *
           * @description
           *
           * Logout a user with access token.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "logout": {
            interceptor: {
              response: function (response) {
                LoopBackAuth.clearUser();
                LoopBackAuth.clearStorage();
                return response.resource;
              }
            },
            url: urlBase + "/users/logout",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.User#confirm
           * @methodOf LoopBack.User
           *
           * @description
           *
           * Confirm a user registration with email verification token.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `uid` – `{string}` - 
           *
           *  - `token` – `{string}` - 
           *
           *  - `redirect` – `{string=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "confirm": {
            url: urlBase + "/users/confirm",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.User#resetPassword
           * @methodOf LoopBack.User
           *
           * @description
           *
           * Reset password for a user with email.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "resetPassword": {
            url: urlBase + "/users/reset",
            method: "POST"
          },

          // INTERNAL. Use AccessToken.user() instead.
          "::get::accessToken::user": {
            url: urlBase + "/accessTokens/:id/user",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.User#getCurrent
           * @methodOf LoopBack.User
           *
           * @description
           *
           * Get data of the currently logged user. Fail with HTTP result 401
           * when there is no user logged in.
           *
           * @param {function(Object,Object)=} successCb
           *    Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *    `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           */
          "getCurrent": {
            url: urlBase + "/users" + "/:id",
            method: "GET",
            params: {
              id: function () {
                var id = LoopBackAuth.currentUserId;
                if (id == null) id = '__anonymous__';
                return id;
              },
            },
            interceptor: {
              response: function (response) {
                LoopBackAuth.currentUserData = response.data;
                return response.resource;
              }
            },
            __isGetCurrentUser__: true
          }
        }
      );

      /**
       * @ngdoc method
       * @name LoopBack.User#updateOrCreate
       * @methodOf LoopBack.User
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `User` object.)
       * </em>
       */
      R["updateOrCreate"] = R["upsert"];

      /**
       * @ngdoc method
       * @name LoopBack.User#update
       * @methodOf LoopBack.User
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * The number of instances updated
       */
      R["update"] = R["updateAll"];

      /**
       * @ngdoc method
       * @name LoopBack.User#destroyById
       * @methodOf LoopBack.User
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `User` object.)
       * </em>
       */
      R["destroyById"] = R["deleteById"];

      /**
       * @ngdoc method
       * @name LoopBack.User#removeById
       * @methodOf LoopBack.User
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `User` object.)
       * </em>
       */
      R["removeById"] = R["deleteById"];

      /**
       * @ngdoc method
       * @name LoopBack.User#getCachedCurrent
       * @methodOf LoopBack.User
       *
       * @description
       *
       * Get data of the currently logged user that was returned by the last
       * call to {@link LoopBack.User#login} or
       * {@link LoopBack.User#getCurrent}. Return null when there
       * is no user logged in or the data of the current user were not fetched
       * yet.
       *
       * @returns {Object} A User instance.
       */
      R.getCachedCurrent = function () {
        var data = LoopBackAuth.currentUserData;
        return data ? new R(data) : null;
      };

      /**
       * @ngdoc method
       * @name LoopBack.User#isAuthenticated
       * @methodOf LoopBack.User
       *
       * @returns {boolean} True if the current user is authenticated (logged in).
       */
      R.isAuthenticated = function () {
        return this.getCurrentId() != null;
      };

      /**
       * @ngdoc method
       * @name LoopBack.User#getCurrentId
       * @methodOf LoopBack.User
       *
       * @returns {Object} Id of the currently logged-in user or null.
       */
      R.getCurrentId = function () {
        return LoopBackAuth.currentUserId;
      };

      /**
       * @ngdoc property
       * @name LoopBack.User#modelName
       * @propertyOf LoopBack.User
       * @description
       * The name of the model represented by this $resource,
       * i.e. `User`.
       */
      R.modelName = "User";

      /**
       * @ngdoc object
       * @name LoopBack.User.roles
       * @header LoopBack.User.roles
       * @object
       * @description
       *
       * The object `User.roles` groups methods
       * manipulating `Role` instances related to `User`.
       *
       * Call {@link LoopBack.User#roles User.roles()}
       * to query all related instances.
       */

      /**
       * @ngdoc method
       * @name LoopBack.User#roles
       * @methodOf LoopBack.User
       *
       * @description
       *
       * Queries roles of user.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `filter` – `{object=}` - 
       *
       * @param {function(Array.<Object>,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Array.<Object>} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Role` object.)
       * </em>
       */
      R.roles = function () {
        var TargetResource = $injector.get("Role");
        var action = TargetResource["::get::user::roles"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.User.roles#count
       * @methodOf LoopBack.User.roles
       *
       * @description
       *
       * Counts roles of user.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * Data properties:
       *
       *  - `count` – `{number=}` - 
       */
      R.roles.count = function () {
        var TargetResource = $injector.get("Role");
        var action = TargetResource["::count::user::roles"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.User.roles#create
       * @methodOf LoopBack.User.roles
       *
       * @description
       *
       * Creates a new instance in roles of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Role` object.)
       * </em>
       */
      R.roles.create = function () {
        var TargetResource = $injector.get("Role");
        var action = TargetResource["::create::user::roles"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.User.roles#createMany
       * @methodOf LoopBack.User.roles
       *
       * @description
       *
       * Creates a new instance in roles of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Array.<Object>,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Array.<Object>} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Role` object.)
       * </em>
       */
      R.roles.createMany = function () {
        var TargetResource = $injector.get("Role");
        var action = TargetResource["::createMany::user::roles"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.User.roles#destroyAll
       * @methodOf LoopBack.User.roles
       *
       * @description
       *
       * Deletes all roles of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.roles.destroyAll = function () {
        var TargetResource = $injector.get("Role");
        var action = TargetResource["::delete::user::roles"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.User.roles#destroyById
       * @methodOf LoopBack.User.roles
       *
       * @description
       *
       * Delete a related item by id for roles.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for roles
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.roles.destroyById = function () {
        var TargetResource = $injector.get("Role");
        var action = TargetResource["::destroyById::user::roles"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.User.roles#exists
       * @methodOf LoopBack.User.roles
       *
       * @description
       *
       * Check the existence of roles relation to an item by id.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for roles
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Role` object.)
       * </em>
       */
      R.roles.exists = function () {
        var TargetResource = $injector.get("Role");
        var action = TargetResource["::exists::user::roles"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.User.roles#findById
       * @methodOf LoopBack.User.roles
       *
       * @description
       *
       * Find a related item by id for roles.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for roles
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Role` object.)
       * </em>
       */
      R.roles.findById = function () {
        var TargetResource = $injector.get("Role");
        var action = TargetResource["::findById::user::roles"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.User.roles#link
       * @methodOf LoopBack.User.roles
       *
       * @description
       *
       * Add a related item by id for roles.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for roles
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Role` object.)
       * </em>
       */
      R.roles.link = function () {
        var TargetResource = $injector.get("Role");
        var action = TargetResource["::link::user::roles"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.User.roles#unlink
       * @methodOf LoopBack.User.roles
       *
       * @description
       *
       * Remove the roles relation to an item by id.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for roles
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.roles.unlink = function () {
        var TargetResource = $injector.get("Role");
        var action = TargetResource["::unlink::user::roles"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.User.roles#updateById
       * @methodOf LoopBack.User.roles
       *
       * @description
       *
       * Update a related item by id for roles.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for roles
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Role` object.)
       * </em>
       */
      R.roles.updateById = function () {
        var TargetResource = $injector.get("Role");
        var action = TargetResource["::updateById::user::roles"];
        return action.apply(R, arguments);
      };
      /**
       * @ngdoc object
       * @name LoopBack.User.accessTokens
       * @header LoopBack.User.accessTokens
       * @object
       * @description
       *
       * The object `User.accessTokens` groups methods
       * manipulating `AccessToken` instances related to `User`.
       *
       * Call {@link LoopBack.User#accessTokens User.accessTokens()}
       * to query all related instances.
       */

      /**
       * @ngdoc method
       * @name LoopBack.User#accessTokens
       * @methodOf LoopBack.User
       *
       * @description
       *
       * Queries accessTokens of user.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `filter` – `{object=}` - 
       *
       * @param {function(Array.<Object>,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Array.<Object>} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `AccessToken` object.)
       * </em>
       */
      R.accessTokens = function () {
        var TargetResource = $injector.get("AccessToken");
        var action = TargetResource["::get::user::accessTokens"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.User.accessTokens#count
       * @methodOf LoopBack.User.accessTokens
       *
       * @description
       *
       * Counts accessTokens of user.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * Data properties:
       *
       *  - `count` – `{number=}` - 
       */
      R.accessTokens.count = function () {
        var TargetResource = $injector.get("AccessToken");
        var action = TargetResource["::count::user::accessTokens"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.User.accessTokens#create
       * @methodOf LoopBack.User.accessTokens
       *
       * @description
       *
       * Creates a new instance in accessTokens of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `AccessToken` object.)
       * </em>
       */
      R.accessTokens.create = function () {
        var TargetResource = $injector.get("AccessToken");
        var action = TargetResource["::create::user::accessTokens"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.User.accessTokens#createMany
       * @methodOf LoopBack.User.accessTokens
       *
       * @description
       *
       * Creates a new instance in accessTokens of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Array.<Object>,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Array.<Object>} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `AccessToken` object.)
       * </em>
       */
      R.accessTokens.createMany = function () {
        var TargetResource = $injector.get("AccessToken");
        var action = TargetResource["::createMany::user::accessTokens"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.User.accessTokens#destroyAll
       * @methodOf LoopBack.User.accessTokens
       *
       * @description
       *
       * Deletes all accessTokens of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.accessTokens.destroyAll = function () {
        var TargetResource = $injector.get("AccessToken");
        var action = TargetResource["::delete::user::accessTokens"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.User.accessTokens#destroyById
       * @methodOf LoopBack.User.accessTokens
       *
       * @description
       *
       * Delete a related item by id for accessTokens.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for accessTokens
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.accessTokens.destroyById = function () {
        var TargetResource = $injector.get("AccessToken");
        var action = TargetResource["::destroyById::user::accessTokens"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.User.accessTokens#findById
       * @methodOf LoopBack.User.accessTokens
       *
       * @description
       *
       * Find a related item by id for accessTokens.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for accessTokens
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `AccessToken` object.)
       * </em>
       */
      R.accessTokens.findById = function () {
        var TargetResource = $injector.get("AccessToken");
        var action = TargetResource["::findById::user::accessTokens"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name LoopBack.User.accessTokens#updateById
       * @methodOf LoopBack.User.accessTokens
       *
       * @description
       *
       * Update a related item by id for accessTokens.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for accessTokens
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `AccessToken` object.)
       * </em>
       */
      R.accessTokens.updateById = function () {
        var TargetResource = $injector.get("AccessToken");
        var action = TargetResource["::updateById::user::accessTokens"];
        return action.apply(R, arguments);
      };

      return R;
    }]);

  /**
   * @ngdoc object
   * @name LoopBack.AccessToken
   * @header LoopBack.AccessToken
   * @object
   *
   * @description
   *
   * A $resource object for interacting with the `AccessToken` model.
   *
   * ## Example
   *
   * See
   * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
   * for an example of using this object.
   *
   */
  module.factory(
    "AccessToken", ['LoopBackResource', 'LoopBackAuth', '$injector', function (Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + "/accessTokens/:id", {
          'id': '@id'
        }, {

          // INTERNAL. Use AccessToken.user() instead.
          "prototype$__get__user": {
            url: urlBase + "/accessTokens/:id/user",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.AccessToken#create
           * @methodOf LoopBack.AccessToken
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AccessToken` object.)
           * </em>
           */
          "create": {
            url: urlBase + "/accessTokens",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.AccessToken#createMany
           * @methodOf LoopBack.AccessToken
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AccessToken` object.)
           * </em>
           */
          "createMany": {
            isArray: true,
            url: urlBase + "/accessTokens",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.AccessToken#upsert
           * @methodOf LoopBack.AccessToken
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AccessToken` object.)
           * </em>
           */
          "upsert": {
            url: urlBase + "/accessTokens",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name LoopBack.AccessToken#exists
           * @methodOf LoopBack.AccessToken
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` - 
           */
          "exists": {
            url: urlBase + "/accessTokens/:id/exists",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.AccessToken#findById
           * @methodOf LoopBack.AccessToken
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AccessToken` object.)
           * </em>
           */
          "findById": {
            url: urlBase + "/accessTokens/:id",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.AccessToken#find
           * @methodOf LoopBack.AccessToken
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AccessToken` object.)
           * </em>
           */
          "find": {
            isArray: true,
            url: urlBase + "/accessTokens",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.AccessToken#findOne
           * @methodOf LoopBack.AccessToken
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AccessToken` object.)
           * </em>
           */
          "findOne": {
            url: urlBase + "/accessTokens/findOne",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.AccessToken#updateAll
           * @methodOf LoopBack.AccessToken
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * The number of instances updated
           */
          "updateAll": {
            url: urlBase + "/accessTokens/update",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.AccessToken#deleteById
           * @methodOf LoopBack.AccessToken
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AccessToken` object.)
           * </em>
           */
          "deleteById": {
            url: urlBase + "/accessTokens/:id",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name LoopBack.AccessToken#count
           * @methodOf LoopBack.AccessToken
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` - 
           */
          "count": {
            url: urlBase + "/accessTokens/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.AccessToken#prototype$updateAttributes
           * @methodOf LoopBack.AccessToken
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - AccessToken id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AccessToken` object.)
           * </em>
           */
          "prototype$updateAttributes": {
            url: urlBase + "/accessTokens/:id",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name LoopBack.AccessToken#createChangeStream
           * @methodOf LoopBack.AccessToken
           *
           * @description
           *
           * Create a change stream.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `changes` – `{ReadableStream=}` - 
           */
          "createChangeStream": {
            url: urlBase + "/accessTokens/change-stream",
            method: "POST"
          },

          // INTERNAL. Use User.accessTokens.findById() instead.
          "::findById::user::accessTokens": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/accessTokens/:fk",
            method: "GET"
          },

          // INTERNAL. Use User.accessTokens.destroyById() instead.
          "::destroyById::user::accessTokens": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/accessTokens/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use User.accessTokens.updateById() instead.
          "::updateById::user::accessTokens": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/users/:id/accessTokens/:fk",
            method: "PUT"
          },

          // INTERNAL. Use User.accessTokens() instead.
          "::get::user::accessTokens": {
            isArray: true,
            url: urlBase + "/users/:id/accessTokens",
            method: "GET"
          },

          // INTERNAL. Use User.accessTokens.create() instead.
          "::create::user::accessTokens": {
            url: urlBase + "/users/:id/accessTokens",
            method: "POST"
          },

          // INTERNAL. Use User.accessTokens.createMany() instead.
          "::createMany::user::accessTokens": {
            isArray: true,
            url: urlBase + "/users/:id/accessTokens",
            method: "POST"
          },

          // INTERNAL. Use User.accessTokens.destroyAll() instead.
          "::delete::user::accessTokens": {
            url: urlBase + "/users/:id/accessTokens",
            method: "DELETE"
          },

          // INTERNAL. Use User.accessTokens.count() instead.
          "::count::user::accessTokens": {
            url: urlBase + "/users/:id/accessTokens/count",
            method: "GET"
          },
        }
      );

      /**
       * @ngdoc method
       * @name LoopBack.AccessToken#updateOrCreate
       * @methodOf LoopBack.AccessToken
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `AccessToken` object.)
       * </em>
       */
      R["updateOrCreate"] = R["upsert"];

      /**
       * @ngdoc method
       * @name LoopBack.AccessToken#update
       * @methodOf LoopBack.AccessToken
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * The number of instances updated
       */
      R["update"] = R["updateAll"];

      /**
       * @ngdoc method
       * @name LoopBack.AccessToken#destroyById
       * @methodOf LoopBack.AccessToken
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `AccessToken` object.)
       * </em>
       */
      R["destroyById"] = R["deleteById"];

      /**
       * @ngdoc method
       * @name LoopBack.AccessToken#removeById
       * @methodOf LoopBack.AccessToken
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `AccessToken` object.)
       * </em>
       */
      R["removeById"] = R["deleteById"];

      /**
       * @ngdoc property
       * @name LoopBack.AccessToken#modelName
       * @propertyOf LoopBack.AccessToken
       * @description
       * The name of the model represented by this $resource,
       * i.e. `AccessToken`.
       */
      R.modelName = "AccessToken";

      /**
       * @ngdoc method
       * @name LoopBack.AccessToken#user
       * @methodOf LoopBack.AccessToken
       *
       * @description
       *
       * Fetches belongsTo relation user.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - AccessToken id
       *
       *  - `refresh` – `{boolean=}` - 
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `User` object.)
       * </em>
       */
      R.user = function () {
        var TargetResource = $injector.get("User");
        var action = TargetResource["::get::accessToken::user"];
        return action.apply(R, arguments);
      };

      return R;
    }]);

  /**
   * @ngdoc object
   * @name LoopBack.Container
   * @header LoopBack.Container
   * @object
   *
   * @description
   *
   * A $resource object for interacting with the `Container` model.
   *
   * ## Example
   *
   * See
   * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
   * for an example of using this object.
   *
   */
  module.factory(
    "Container", ['LoopBackResource', 'LoopBackAuth', '$injector', function (Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + "/containers/:id", {
          'id': '@id'
        }, {

          /**
           * @ngdoc method
           * @name LoopBack.Container#getContainers
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * <em>
           * (The remote method definition does not provide any description.)
           * </em>
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Container` object.)
           * </em>
           */
          "getContainers": {
            isArray: true,
            url: urlBase + "/containers",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#createContainer
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * <em>
           * (The remote method definition does not provide any description.)
           * </em>
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Container` object.)
           * </em>
           */
          "createContainer": {
            url: urlBase + "/containers",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#destroyContainer
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * <em>
           * (The remote method definition does not provide any description.)
           * </em>
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `container` – `{string=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `` – `{undefined=}` - 
           */
          "destroyContainer": {
            url: urlBase + "/containers/:container",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#getContainer
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * <em>
           * (The remote method definition does not provide any description.)
           * </em>
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `container` – `{string=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Container` object.)
           * </em>
           */
          "getContainer": {
            url: urlBase + "/containers/:container",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#getFiles
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * <em>
           * (The remote method definition does not provide any description.)
           * </em>
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `container` – `{string=}` - 
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Container` object.)
           * </em>
           */
          "getFiles": {
            isArray: true,
            url: urlBase + "/containers/:container/files",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#getFile
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * <em>
           * (The remote method definition does not provide any description.)
           * </em>
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `container` – `{string=}` - 
           *
           *  - `file` – `{string=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Container` object.)
           * </em>
           */
          "getFile": {
            url: urlBase + "/containers/:container/files/:file",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#removeFile
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * <em>
           * (The remote method definition does not provide any description.)
           * </em>
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `container` – `{string=}` - 
           *
           *  - `file` – `{string=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `` – `{undefined=}` - 
           */
          "removeFile": {
            url: urlBase + "/containers/:container/files/:file",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#upload
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * <em>
           * (The remote method definition does not provide any description.)
           * </em>
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `req` – `{object=}` - 
           *
           *  - `res` – `{object=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `result` – `{object=}` - 
           */
          "upload": {
            url: urlBase + "/containers/:container/upload",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#download
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * <em>
           * (The remote method definition does not provide any description.)
           * </em>
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `container` – `{string=}` - 
           *
           *  - `file` – `{string=}` - 
           *
           *  - `res` – `{object=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "download": {
            url: urlBase + "/containers/:container/download/:file",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#create
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Container` object.)
           * </em>
           */
          "create": {
            url: urlBase + "/containers",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#createMany
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Container` object.)
           * </em>
           */
          "createMany": {
            isArray: true,
            url: urlBase + "/containers",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#upsert
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Container` object.)
           * </em>
           */
          "upsert": {
            url: urlBase + "/containers",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#exists
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` - 
           */
          "exists": {
            url: urlBase + "/containers/:id/exists",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#findById
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Container` object.)
           * </em>
           */
          "findById": {
            url: urlBase + "/containers/:id",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#find
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Container` object.)
           * </em>
           */
          "find": {
            isArray: true,
            url: urlBase + "/containers",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#findOne
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Container` object.)
           * </em>
           */
          "findOne": {
            url: urlBase + "/containers/findOne",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#updateAll
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * The number of instances updated
           */
          "updateAll": {
            url: urlBase + "/containers/update",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#deleteById
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Container` object.)
           * </em>
           */
          "deleteById": {
            url: urlBase + "/containers/:id",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#count
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` - 
           */
          "count": {
            url: urlBase + "/containers/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#prototype$updateAttributes
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Container` object.)
           * </em>
           */
          "prototype$updateAttributes": {
            url: urlBase + "/containers/:id",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name LoopBack.Container#createChangeStream
           * @methodOf LoopBack.Container
           *
           * @description
           *
           * Create a change stream.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `changes` – `{ReadableStream=}` - 
           */
          "createChangeStream": {
            url: urlBase + "/containers/change-stream",
            method: "POST"
          },
        }
      );

      /**
       * @ngdoc method
       * @name LoopBack.Container#updateOrCreate
       * @methodOf LoopBack.Container
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Container` object.)
       * </em>
       */
      R["updateOrCreate"] = R["upsert"];

      /**
       * @ngdoc method
       * @name LoopBack.Container#update
       * @methodOf LoopBack.Container
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * The number of instances updated
       */
      R["update"] = R["updateAll"];

      /**
       * @ngdoc method
       * @name LoopBack.Container#destroyById
       * @methodOf LoopBack.Container
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Container` object.)
       * </em>
       */
      R["destroyById"] = R["deleteById"];

      /**
       * @ngdoc method
       * @name LoopBack.Container#removeById
       * @methodOf LoopBack.Container
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Container` object.)
       * </em>
       */
      R["removeById"] = R["deleteById"];

      /**
       * @ngdoc property
       * @name LoopBack.Container#modelName
       * @propertyOf LoopBack.Container
       * @description
       * The name of the model represented by this $resource,
       * i.e. `Container`.
       */
      R.modelName = "Container";

      return R;
    }]);

  module
    .factory('LoopBackAuth', function () {
      var props = ['accessTokenId', 'currentUserId'];
      var propsPrefix = '$LoopBack$';

      function LoopBackAuth() {
        var self = this;
        props.forEach(function (name) {
          self[name] = load(name);
        });
        this.rememberMe = undefined;
        this.currentUserData = null;
      }

      LoopBackAuth.prototype.save = function () {
        var self = this;
        var storage = this.rememberMe ? localStorage : sessionStorage;
        props.forEach(function (name) {
          save(storage, name, self[name]);
        });
      };

      LoopBackAuth.prototype.setUser = function (accessTokenId, userId, userData) {
        this.accessTokenId = accessTokenId;
        this.currentUserId = userId;
        this.currentUserData = userData;
      }

      LoopBackAuth.prototype.clearUser = function () {
        this.accessTokenId = null;
        this.currentUserId = null;
        this.currentUserData = null;
      }

      LoopBackAuth.prototype.clearStorage = function () {
        props.forEach(function (name) {
          save(sessionStorage, name, null);
          save(localStorage, name, null);
        });
      };

      return new LoopBackAuth();

      // Note: LocalStorage converts the value to string
      // We are using empty string as a marker for null/undefined values.
      function save(storage, name, value) {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      }

      function load(name) {
        var key = propsPrefix + name;
        return localStorage[key] || sessionStorage[key] || null;
      }
    })
    .config(['$httpProvider', function ($httpProvider) {
      $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
    }])
    .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
      function ($q, LoopBackAuth) {
        return {
          'request': function (config) {

            // filter out non urlBase requests
            if (config.url.substr(0, urlBase.length) !== urlBase) {
              return config;
            }

            if (LoopBackAuth.accessTokenId) {
              config.headers[authHeader] = LoopBackAuth.accessTokenId;
            } else if (config.__isGetCurrentUser__) {
              // Return a stub 401 error for User.getCurrent() when
              // there is no user logged in
              var res = {
                body: {
                  error: {
                    status: 401
                  }
                },
                status: 401,
                config: config,
                headers: function () {
                  return undefined;
                }
              };
              return $q.reject(res);
            }
            return config || $q.when(config);
          }
        }
      }
    ])

  /**
   * @ngdoc object
   * @name LoopBack.LoopBackResourceProvider
   * @header LoopBack.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name LoopBack.LoopBackResourceProvider#setAuthHeader
     * @methodOf LoopBack.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function (header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name LoopBack.LoopBackResourceProvider#setUrlBase
     * @methodOf LoopBack.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function (url) {
      urlBase = url;
    };

    /**
     * @ngdoc method
     * @name LoopBack.LoopBackResourceProvider#getUrlBase
     * @methodOf LoopBack.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function () {
      return urlBase;
    };

    this.$get = ['$resource', function ($resource) {
      return function (url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function (success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
