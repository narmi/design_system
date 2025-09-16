declare module "raf-schd" {
  interface ScheduledFunction {
    (...args: unknown[]): void;
    cancel(): void;
  }
  function rafSchd<T extends (...args: unknown[]) => void>(
    fn: T,
  ): ScheduledFunction;
  export default rafSchd;
}
