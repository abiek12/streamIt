const Login = () => {
  return (
    <div className="absolute inset-0 z-10 w-3/12 h-1/2 flex flex-col gap-4 bg-black/60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1>Sign In</h1>
      <form action="" method="post">
        <input type="text" placeholder="Email or phone number" className="" />
        <input type="text" placeholder="Password" className="" />
        <button type="submit" className="">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
