Algorithm ReadSentence

Var 
   i, nbv : INTEGER := 0 ;
   nbw : INTEGER := 1 ;
   str : STRING ; 

BEGIN
         Write("type the sentence str")
    Read(str)
    WHILE (str[i] <> ".") DO
        IF (Str[i]=" ") THEN
            nbw := nbw + 1;
        END_IF
        IF (str[i]="a" OR str[i] = "e" OR str[i]="i" OR str[i] = "o" OR str[i]= "u" OR str[i]="y") THEN
            nbv := nbv +1;
        END_IF
         i:= i+1;
    END_WHILE
    Write("la longueur de la phrase est :", i)
    Write("le nombre du voyels est :", nbv)
        Write("le nombre des mots est :", nbw)

END