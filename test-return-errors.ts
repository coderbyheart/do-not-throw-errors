/**
 * Problem Details Object
 *
 * @see https://datatracker.ietf.org/doc/draft-ietf-httpapi-rfc7807bis/
 */
type ProblemDetail = {
	'@context'?: string,
	'@id'?: string,
	type?: string,
	status?: number,
	title: string,
	detail?: string,
}

const addPositiveNumbersWithError = (
  numberA: number,
  numberB: number
):
  | {
      result: number;
    }
  | { error: ProblemDetail } => {
  if (numberA <= 0) return { error: {title: `Number A must be positive.`} };
  return { result: numberA + numberB };
};

const myFuncWithErrorReturned = () => {
  addPositiveNumbersWithError(1, 2);
  const maybeSum = addPositiveNumbersWithError(-1, 3);
  if ("error" in maybeSum) {
    console.error(`Error has happened:`, maybeSum.error);
  } else {
    console.log(`Result`, maybeSum.result);
  }
};

myFuncWithErrorReturned();
