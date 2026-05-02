const Login = ({ toggle }) => {
  return (
    <div className="absolute inset-0 p-16 z-10 w-3/12 h-7/12 flex flex-col gap-4 justify-start items-start bg-black/70 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-3xl font-bold w-full mb-6">Sign In</h1>
      <form
        action=""
        method="post"
        className="flex flex-col justify-center items-center gap-4 w-full"
      >
        <input
          type="text"
          placeholder="Email or phone number"
          className="w-full bg-surface-2 p-4 rounded-sm"
        />
        <input
          type="text"
          placeholder="Password"
          className="w-full bg-surface-2 p-4 rounded-sm"
        />
        <button
          type="submit"
          className="w-full mt-6 bg-primary p-4 cursor-pointer hover:bg-primary-dark font-medium"
        >
          Sign In
        </button>
      </form>
      <div className="flex justify-between items-center w-full text-sm mb-16">
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="Remember me"
            id="remember"
            className="cursor-pointer"
          />
          <label for="subscribe">Remember me</label>
        </div>
        <div className="cursor-pointer hover:underline">Need help?</div>
      </div>
      <div className="sign-up-call-to-action flex gap-2 text-sm">
        <span className="text-text-muted">New to Netflix?</span>
        <button className="cursor-pointer hover:underline" onClick={toggle}>
          Sign up now
        </button>
      </div>
    </div>
  );
};

export default Login;
