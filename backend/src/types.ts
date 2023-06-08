import {Request} from 'express'
import {SortDirection} from "./constants";


// ViewModels
export type UserViewModel = {
    id: string
    login: string
    email: string
    createdAt: string
}

// DBTypes
export type UserAccountDBType = {
    id: string
    accountData: {
        login: string
        email: string
        passwordHash: string
        passwordSalt: string
        createdAt: string
    }
}

// DTO
export type IdDTO = {
    id: string
}
export type PagingDTO = {
    pageNumber: number
    pageSize: number
    sortBy: string
    sortDirection: SortDirection
}
export type PagingWithSearchDTO = {
    searchNameTerm: string
    pageNumber: number
    pageSize: number
    sortBy: string
    sortDirection: SortDirection
}

// InputModels
export type UserGetDTO = {
    searchEmailTerm: string
    searchLoginTerm: string
    pageNumber: string
    pageSize: string
    sortBy: string
    sortDirection: SortDirection
}
export type UserRegDTO = {
    login: string
    password: string
    email: string
}


export type ReqParamsType<T>         = Request<T>
export type ReqBodyType<T>           = Request<{},{},T>
export type ReqQueryType<T>          = Request<{},{},{},T>
export type ReqParamsBodyType<T, Y>  = Request<T,{},Y>
export type ReqParamsQueryType<T, Y> = Request<T,{},{},Y>