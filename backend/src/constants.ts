export const HTTP_STATUS = {
    OK_200: 200,
    CREATED_201: 201,
    NO_CONTENT_204: 204,
    BAD_REQUEST_400: 400,
    UNAUTHORIZED_401: 401,
    FORBIDDEN_403: 403,
    NOT_FOUND_404: 404,
    TOO_MANY_REQUESTS_429: 429,
    INTERNAL_SERVER_ERROR: 500
}
export enum LikeStatus {
    Like = 'Like',
    Dislike = 'Dislike',
    None = 'None'
}
export enum SortDirection {
    asc = 'asc',
    desc = 'desc',
    default = 'desc'
}
export enum SortBy {
    default = 'createdAt',
    createdAt = 'createdAt',
    // todo - по чему еще можно сортировать кроме даты создния?
}
export enum ResultCode {
    Success = 0,
    NotFound = 1,
    BedRequest = 2,
    Unauthorized = 3
}