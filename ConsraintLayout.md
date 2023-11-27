3 layout types
linearLayout - 2 dimension  
relativeLayout-2 dimension  
constraint layout-3 dimensions  



### 1) Constraint layout
```xml
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".FirstFragment">

    <TextView
        android:id="@+id/textview_first"
        android:layout_width="wrap_content"
        android:layout_height="200dp"
        android:text="@string/hello_first_fragment"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintBottom_toTopOf="@id/button_first"
        />


    <TextView
        android:id="@+id/textview_second"
        android:layout_width="wrap_content"
        android:layout_height="200dp"
        android:text="Hello 2nd"
        app:layout_constraintTop_toTopOf="@id/textview_first"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintBottom_toTopOf="@id/button_first"
        />

    <TextView
        android:id="@+id/textview_third"
        android:layout_width="wrap_content"
        android:layout_height="200dp"
        android:text="Hello 3rd"
        app:layout_constraintTop_toTopOf="@id/textview_second"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintBottom_toTopOf="@id/button_first"
        />

    <Button
        android:id="@+id/button_first"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/next"
        app:layout_constraintTop_toBottomOf="@id/textview_first"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintBottom_toBottomOf="parent"
        />
</androidx.constraintlayout.widget.ConstraintLayout>
```



### 2 - Relative layout


```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingLeft="10dp"
    android:paddingRight="10dp">

    <Button
        android:id="@+id/buttonFirst"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentLeft="true"
        android:layout_alignParentStart="true"
        android:text="Button1"/>
</RelativeLayout>

```
