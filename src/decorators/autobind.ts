//autobind decorator

export function Autobind(_: any, _2: string, description: PropertyDescriptor) {
  const originMethod = description.value;
  const adjDescriptor: PropertyDescriptor = {
    enumerable: false,
    configurable: true,
    get() {
      const boudnFn = originMethod.bind(this);
      return boudnFn;
    },
  };
  return adjDescriptor;
}
