import { ORIGEN_FILTER } from '.';

export default function origenfilter(payload) {
    return {
        type: ORIGEN_FILTER,
        payload
    }
}