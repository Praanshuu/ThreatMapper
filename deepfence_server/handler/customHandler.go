package handler

import (
	"github.com/casbin/casbin/v2"
	"github.com/deepfence/ThreatMapper/deepfence_server/apiDocs"
	"github.com/go-chi/jwtauth/v5"
)

type Handler struct {
	TokenAuth      *jwtauth.JWTAuth
	AuthEnforcer   *casbin.Enforcer
	OpenApiDocs    *apiDocs.OpenApiDocs
	SaasDeployment bool
}
