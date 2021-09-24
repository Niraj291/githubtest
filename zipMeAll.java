class zipMeAll
{
public static void main(String[] args)
{
int arr1[] = {1,2};
int arr2[] = {3,4};
int n1 = arr1.length;
int n2 = arr2.length;
if(n1 == n2)
{
  for(int i=0; i<n1; i++)
  {
    for(int j=i; j<=i;j++)
    {
      System.out.print("["+arr1[i]+","+arr2[j]+"],");
    }
  }
  else
  {
  System.out.println("not same size of arrays");
  }
}
}
}
