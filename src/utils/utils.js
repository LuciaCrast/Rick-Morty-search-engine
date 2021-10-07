function ErrorMsg(...rest) {
  return rest.filter(Boolean).join(", ");
}

export { ErrorMsg };
