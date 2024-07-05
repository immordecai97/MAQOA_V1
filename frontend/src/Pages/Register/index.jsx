import { useContext, useEffect } from "react";
import Layout from "../../Components/Layout";
import { useForm } from "react-hook-form";
import { ShopMaqoaContext } from "../../Context";
import { Navigate } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signUp, isAuth } = useContext(ShopMaqoaContext);

    if (isAuth) {
        return <Navigate to="/login" />;
    }

    return (
        <Layout title="Sign up">
            <div className="w-full max-w-[25rem]">
                <form
                    onSubmit={handleSubmit(signUp)}
                    className="w-full mx-auto py-4 px-8 bg-white rounded shadow-lg flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="username" className="pl-2">Username</label>
                        <input
                            {...register('username', { required: true })}
                            type="text"
                            id="username"
                            placeholder="Username"
                            className="border border-black py-2 px-4 rounded"
                        />
                        {errors.username && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="pl-2">Email</label>
                        <input
                            {...register('email', { required: true })}
                            type="text"
                            id="email"
                            placeholder="maqoa@maqoa.com"
                            className="border border-black py-2 px-4 rounded"
                        />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="pl-2">Password</label>
                        <input
                            {...register('password', { required: true })}
                            type="password"
                            id="password"
                            placeholder="*******"
                            className="border border-black py-2 px-4 rounded"
                        />
                        {errors.password && <span className="text-red-500">This field is required</span>}
                    </div>
                    <input type="hidden" name="role" value="client" {...register('role', { required: true })} />
                    <div className="flex flex-col gap-1">
                        <button type="submit" className="bg-black text-white py-2 px-4 w-full rounded text-center">Sign up</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Register;
