import { Transform } from 'class-transformer';

export function TransformToBoolean(): PropertyDecorator {
    return Transform(({ value }) =>
        value === 'true' || value === '1'
            ? true
            : value === 'false' || value === '0'
                ? false
                : value
    );
}
