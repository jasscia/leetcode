char * multiply(char * num1, char * num2)
{
    int length1 = strlen(num1);
    int length2 = strlen(num2);
    int totalLength = length1 + length2;                     //获取相乘后字符串的总有效位数
    
    int charIndex = 0;                                       //定义负责索引字段
    int valueIndex = 0;
    
    int *value = (int *)malloc(sizeof(int) * totalLength);
    memset(value, 0, sizeof(int) * totalLength);
    
    char *result = (char *)malloc(sizeof(char) * (totalLength + 1));
    
    
    for(int i = length1  - 1; i >= 0; i--)
    {
        for(int j = length2 - 1; j >= 0; j--)
        {
            value[i + j + 1] += (num1[i] - '0') * (num2[j] - '0');
        }
    }
    
    for(int i= totalLength - 1; i > 0; i--)                 //获取每个位置上面的数字并处理进位
    {
        value[i - 1] += value[i] / 10;
        value[i] %= 10;
    }
    
    while(value[valueIndex] == 0 && valueIndex < totalLength -1 ) {
            valueIndex++;                                        //忽略掉前面多余的0，但是最高位也就是唯一的一位0不能忽略
        }
    while(valueIndex < totalLength){
            result[charIndex++] = value[valueIndex++] + '0';
        }
    
    result[charIndex] = '\0';                                //默认补上字符串的终止符
    return result;  
}


char * multiply(char * num1, char * num2){
    int m = strlen(num1);
    int n = strlen(num2);
    int length = m + n;
    int *res = (int *)malloc(sizeof(int) * (length + 1))
    char *result = (char *)malloc(sizeof(char) * (length + 1));
    memset(res, 0, sizeof(int)*length);
    int temp[5] = {0, 1, 0, 0, 0};
    short tempRes;
    for (int i=0; i<m; i++) {
        for (int j=0; j<m; j++) {
            tempRes = (short) ((num1[i]-'\0') * (num2[j]-'\0'));
            temp[0] = i + j;
            temp[1] = i + j + 1;
            temp[2] = (int) (tempRes % 10);
            temp[3] = (int) (tempRes / 10);
            res[temp[0]] += temp[2];
            res[temp[1]] += temp[3];
        }
    }
    if(res[temp[1]] == 0) {
        temp[1]-=1
    }
    for (int i=0,j=temp[1]; i<j; i++,j++) {
        temp[4] = res[i];
        res[i] = res[j];
        res[j] = temp[4];
    }
    for (int i = 0; i <= temp[1];i++) {
        resChar[i] = res[i] + '\0';
    }
    result[temp[1]] = '\0';
    return result;
}