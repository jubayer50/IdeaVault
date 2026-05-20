import ProfileUpdate from "@/Components/ProfileUpdate/ProfileUpdate";
import { auth } from "@/lib/auth";
import { Avatar, Card } from "@heroui/react";
import { headers } from "next/headers";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <div className="max-w-340 px-3 mx-auto my-9 md:my-16">
      <h2 className="text-2xl font-bold my-5">Manage Your Profile</h2>

      <div className="mt-6">
        <Card className="border rounded-md py-8 text-center">
          <div>
            <Avatar className="mx-auto rounded-full w-30 h-30 border">
              <Avatar.Image
                alt={user?.name}
                src={user?.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>

            <div className="mt-4 space-y-1">
              <h2 className="font-bold text-xl">{user?.name}</h2>
              <p>{user?.email}</p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-3">
            <ProfileUpdate></ProfileUpdate>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
