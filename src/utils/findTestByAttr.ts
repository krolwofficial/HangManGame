const findTestByAttr = (wrapper: any, value: any) =>
  wrapper.find(`[data-test="${value}"]`);

export default findTestByAttr;
