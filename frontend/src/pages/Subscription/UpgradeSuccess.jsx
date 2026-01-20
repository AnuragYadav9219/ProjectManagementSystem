import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  getUserSubscription,
  upgradeSubscription,
} from "@/Redux/Subscription/Action";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UpgradeSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const subscription = useSelector((store) => store.subscription);
  const queryParams = new URLSearchParams(location.search);
  const paymentId = queryParams.get("payment_id");
  const planType = queryParams.get("planType");

  useEffect(() => {
    dispatch(upgradeSubscription({ planType }));
    dispatch(getUserSubscription());
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-emerald-100 dark:from-zinc-900 dark:to-zinc-800 px-4">
      <Card className="max-w-md w-full p-8 rounded-2xl shadow-xl border border-green-200 dark:border-zinc-700">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircledIcon className="h-12 w-12 text-green-600" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-center text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Plan Upgraded Successfully 🎉
        </h1>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
          Your subscription has been activated. Enjoy premium features!
        </p>

        {/* Details */}
        <div className="mt-8 space-y-4 bg-white dark:bg-zinc-900 rounded-xl p-5 border dark:border-zinc-700">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Start Date</span>
            <span className="font-medium text-green-600">
              {subscription.userSubscription?.subscriptionStartDate}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">End Date</span>
            <span className="font-medium text-red-500">
              {subscription.userSubscription?.subscriptionEndDate}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Plan Type</span>
            <span className="font-semibold text-indigo-600">{subscription.userSubscription?.planType}</span>
          </div>
        </div>

        {/* Button */}
        <Button
          onClick={() => navigate("/")}
          className="w-full mt-8 h-11 rounded-xl text-base"
        >
          Go to Dashboard
        </Button>
      </Card>
    </div>
  );
};

export default UpgradeSuccess;

// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { CheckCircledIcon } from "@radix-ui/react-icons";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const UpgradeSuccess = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex justify-center">
//       <Card className="mt-20 space-y-5 flex flex-col items-center">
//         <div className="flex items-center gap-4">
//           <CheckCircledIcon className="h-9 w-9 text-green-500" />
//           <p className="text-xl">Plan Upgraded Successfully</p>
//         </div>

//         <div className="space-y-3">
//           <p className="text-green-500">Start Date:</p>
//           <p className="text-red-500">End Date:</p>
//           <p>Plan Type:</p>
//         </div>

//         <Button onClick={() => navigate("/")}>Go to home</Button>
//       </Card>
//     </div>
//   );
// };

// export default UpgradeSuccess;
