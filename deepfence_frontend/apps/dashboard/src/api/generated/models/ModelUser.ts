/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelUser
 */
export interface ModelUser {
    /**
     * 
     * @type {string}
     * @memberof ModelUser
     */
    company: string;
    /**
     * 
     * @type {number}
     * @memberof ModelUser
     */
    company_id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ModelUser
     */
    current_user?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof ModelUser
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof ModelUser
     */
    first_name: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ModelUser
     */
    groups?: { [key: string]: string; } | null;
    /**
     * 
     * @type {number}
     * @memberof ModelUser
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ModelUser
     */
    is_active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelUser
     */
    last_name: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelUser
     */
    password_invalidated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelUser
     */
    role?: ModelUserRoleEnum;
    /**
     * 
     * @type {number}
     * @memberof ModelUser
     */
    role_id?: number;
}


/**
 * @export
 */
export const ModelUserRoleEnum = {
    Admin: 'admin',
    StandardUser: 'standard-user',
    ReadOnlyUser: 'read-only-user'
} as const;
export type ModelUserRoleEnum = typeof ModelUserRoleEnum[keyof typeof ModelUserRoleEnum];


/**
 * Check if a given object implements the ModelUser interface.
 */
export function instanceOfModelUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "company" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "first_name" in value;
    isInstance = isInstance && "last_name" in value;

    return isInstance;
}

export function ModelUserFromJSON(json: any): ModelUser {
    return ModelUserFromJSONTyped(json, false);
}

export function ModelUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'company': json['company'],
        'company_id': !exists(json, 'company_id') ? undefined : json['company_id'],
        'current_user': !exists(json, 'current_user') ? undefined : json['current_user'],
        'email': json['email'],
        'first_name': json['first_name'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'is_active': !exists(json, 'is_active') ? undefined : json['is_active'],
        'last_name': json['last_name'],
        'password_invalidated': !exists(json, 'password_invalidated') ? undefined : json['password_invalidated'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'role_id': !exists(json, 'role_id') ? undefined : json['role_id'],
    };
}

export function ModelUserToJSON(value?: ModelUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company': value.company,
        'company_id': value.company_id,
        'current_user': value.current_user,
        'email': value.email,
        'first_name': value.first_name,
        'groups': value.groups,
        'id': value.id,
        'is_active': value.is_active,
        'last_name': value.last_name,
        'password_invalidated': value.password_invalidated,
        'role': value.role,
        'role_id': value.role_id,
    };
}

