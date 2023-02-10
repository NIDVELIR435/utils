import { isBoolean, isNumber, isString } from 'lodash';

export type ParamToArrayType<
    ParamObject,
    Params extends Readonly<Array<keyof ParamObject>>
> = {
    [Key in keyof ParamObject]: Key extends Params[number]
        ? Array<ParamObject[Key]>
        : ParamObject[Key];
};

export const paramToArray = <
    ParamObject extends {
        [Property in keyof ParamObject]: ParamObject[Property];
    },
    Params extends Readonly<Array<keyof ParamObject>>
>(
    paramsToTransform: Params,
    params: ParamObject
): ParamToArrayType<ParamObject, Params> => {
    let newParam: ParamObject = params;
    paramsToTransform.forEach((value) => {
        if (
            (isBoolean(newParam[value]) ||
                isString(newParam[value]) ||
                isNumber(newParam[value])) &&
            newParam[value] !== ''
        ) {
            newParam[value] = Array.of(
                newParam[value]
            ) as ParamObject[keyof ParamObject];
        }
    });
    return newParam;
};
