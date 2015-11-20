angular.module('app', []).run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('scripts/modules/auth/views/login.view.html',
    "<div class=\"container\"><div class=\"row\"><div class=\"col-lg-6 col-lg-offset-3\"><div style=\"margin-top:30%\" class=\"well\"><form name=\"login-form\" class=\"form-horizontal\"><fieldset><legend>Login</legend><div class=\"form-group\"><label for=\"inputEmail\" class=\"col-md-2 control-label\">Email</label><div class=\"col-md-10\"><input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\"></div></div><div class=\"form-group\"><label for=\"inputEmail\" class=\"col-md-2 control-label\">Password</label><div class=\"col-md-10\"><input type=\"password\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Password\"></div></div><div class=\"form-group\"><div class=\"col-lg-10 col-lg-offset-2\"><button type=\"submit\" class=\"pull-right btn btn-primary\">Entrar</button></div></div></fieldset></form></div></div></div></div>"
  );

}]);
