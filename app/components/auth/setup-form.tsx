'use client';

import { createSetup } from '@/app/actions/auth/setup';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function SetupForm() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Complete school setup</CardTitle>
        <CardDescription>
          Create your school profile and the first admin account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={createSetup} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="schoolName">School name</Label>
              <Input id="schoolName" name="schoolName" placeholder="Green Valley School" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="schoolCode">School code</Label>
              <Input id="schoolCode" name="schoolCode" placeholder="GVS" maxLength={10} required />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="adminName">Admin name</Label>
              <Input id="adminName" name="adminName" placeholder="Jane Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" placeholder="admin" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" placeholder="••••••••" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="••••••••" required />
            </div>
          </div>

          <Button type="submit">Create setup</Button>
        </form>
      </CardContent>
    </Card>
  );
}

