export interface IUseCase<IReq, IRes> {
  execute(request?: IReq): Promise<IRes> | IRes;
}
