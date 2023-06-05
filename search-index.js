var searchIndex = JSON.parse('{\
"dokany":{"doc":"","t":"SSSDISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSIDDDSSSSQSSSSDSSDDSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSDLLLKLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLFLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLFLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLFLLLLLLLLLLFLLLLLLLLFLLLLLLLLLCLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLFLFL","n":["ACCESS_SYSTEM_SECURITY","ALLOW_IPC_BATCHING","ALT_STREAM","AccessMask","AsWide","CASE_PRESERVED_NAMES","CASE_SENSITIVE","CASE_SENSITIVE_SEARCH","CURRENT_SESSION","DAX_VOLUME","DEBUG","DELETE","DISPATCH_DRIVER_LOGS","DRIVER_INSTALL_ERROR","DRIVE_LETTER_ERROR","ENABLE_UNMOUNT_NETWORK_DRIVE","ERROR","FILELOCK_USER_MODE","FILE_ADD_FILE","FILE_ADD_SUBDIRECTORY","FILE_ALL_ACCESS","FILE_APPEND_DATA","FILE_COMPRESSION","FILE_CREATE_PIPE_INSTANCE","FILE_DELETE_CHILD","FILE_EXECUTE","FILE_LIST_DIRECTORY","FILE_READ_ATTRIBUTES","FILE_READ_DATA","FILE_READ_EA","FILE_SUPPORTS_HARD_LINKS","FILE_TRAVERSE","FILE_WRITE_ATTRIBUTES","FILE_WRITE_DATA","FILE_WRITE_EA","FileSystem","FileSystemFlags","FillFindData","FindData","GENERIC_ALL","GENERIC_EXECUTE","GENERIC_READ","GENERIC_WRITE","Iter","MAXIMUM_ALLOWED","MOUNT_ERROR","MOUNT_MANAGER","MOUNT_POINT_ERROR","MainResult","NAMED_STREAMS","NETWORK","OptionFlags","Options","PERSISTENT_ACLS","READ_CONTROL","READ_ONLY_VOLUME","REMOVABLE","RETURNS_CLEANUP_RESULT_INFO","SEQUENTIAL_WRITE_ONCE","SPECIFIC_RIGHTS_ALL","STANDARD_RIGHTS_ALL","STANDARD_RIGHTS_EXECUTE","STANDARD_RIGHTS_READ","STANDARD_RIGHTS_REQUIRED","STANDARD_RIGHTS_WRITE","START_ERROR","STDERR","SUCCESS","SUPPORTS_BLOCK_REFCOUNTING","SUPPORTS_ENCRYPTION","SUPPORTS_EXTENDED_ATTRIBUTES","SUPPORTS_GHOSTING","SUPPORTS_INTEGRITY_STREAMS","SUPPORTS_OBJECT_IDS","SUPPORTS_OPEN_BY_FILE_ID","SUPPORTS_POSIX_UNLINK_RENAME","SUPPORTS_REMOTE_STORAGE","SUPPORTS_REPARSE_POINTS","SUPPORTS_SPARSE_FILES","SUPPORTS_SPARSE_VDL","SUPPORTS_TRANSACTIONS","SUPPORTS_USN_JOURNAL","SYNCHRONIZE","UNICODE_ON_DISK","VERSION_ERROR","VOLUME_IS_COMPRESSED","VOLUME_QUOTAS","WRITE_DAC","WRITE_OWNER","WRITE_PROTECT","WriteWideCStringCell","all","all","all","as_wide","bitand","bitand","bitand","bitand_assign","bitand_assign","bitand_assign","bitor","bitor","bitor","bitor_assign","bitor_assign","bitor_assign","bits","bits","bits","bits","bits","bits","bitxor","bitxor","bitxor","bitxor_assign","bitxor_assign","bitxor_assign","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","complement","complement","complement","contains","contains","contains","create_file","default","default","default","difference","difference","difference","driver_version","empty","empty","empty","eq","extend","extend","extend","fill","find_files","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from_bits","from_bits","from_bits","from_bits_retain","from_bits_retain","from_bits_retain","from_bits_retain","from_bits_retain","from_bits_retain","from_bits_truncate","from_bits_truncate","from_bits_truncate","from_iter","from_iter","from_iter","from_name","from_name","from_name","get_volume_information","hash","init","insert","insert","insert","intersection","intersection","intersection","intersects","intersects","intersects","into","into","into","into","into","into","into","into","into_iter","into_iter","into_iter","is_all","is_all","is_all","is_empty","is_empty","is_empty","is_success","iter","iter","iter","iter_names","iter_names","iter_names","main","mounted","new","new","not","not","not","provide","remove","remove","remove","remove_mount_point","set","set","set","set_file_name","set_mount_point","set_option_flags","set_size","set_version","shutdown","sub","sub","sub","sub_assign","sub_assign","sub_assign","symmetric_difference","symmetric_difference","symmetric_difference","sys","to_owned","to_string","toggle","toggle","toggle","total_len","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","union","union","union","unmount","unmounted","version","write"],"q":["dokany","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Access system security (ACCESS_SYSTEM_SECURITY).","Pull batches of events from the driver instead of a single …","Enable the use of alternate stream paths in the form :. If …","A value that defines standard, specific, and generic …","Implemented for types that can be converted into wide char …","The specified volume supports preserved case of file names …","Enable Case sensitive path.","The specified volume supports case-sensitive file names.","Mount the drive on current session only.","The specified volume is a direct access (DAX) volume.","Enable ouput debug message","Delete access.","Forward the kernel driver global and volume logs to the …","Dokan mount failed - Can’t install driver.","Dokan mount failed - Bad drive letter.","Allows unmounting of network drive via explorer","Dokan mount error.","Enable Lockfile/Unlockfile operations.","For a directory, the right to create a file in the …","For a directory, the right to create a subdirectory.","All possible access rights for a file.","For a file object, the right to append data to the file.","The specified volume supports file-based compression.","For a named pipe, the right to create a pipe.","For a directory, the right to delete a directory and all …","For a native code file, the right to execute the file.","For a directory, the right to list the contents of the …","The right to read file attributes.","For a file object, the right to read the corresponding …","The right to read extended file attributes.","The specified volume supports hard links. For more …","For a directory, the right to traverse the directory.","The right to write file attributes.","For a file object, the right to write data to the file. …","The right to write extended file attributes.","The trait a type must implement to serve as a file system","Capability flags for a filesystem.","Supply a FindData entry for directory listing.","A dir entry","?","?","?","?","","Maximum allowed","Dokan mount failed.","Use Windows Mount Manager.","Dokan mount failed.","The error/result for mounting a filesystem.","The specified volume supports named streams.","Use network drive - Dokan network provider needs to be …","Options to configure the driver mount","Options for a filesystem","The specified volume preserves and enforces access control …","Read access to the owner, group, and discretionary access …","The specified volume is read-only.","Use removable drive","?","The specified volume supports a single sequential write.","?","?","?","?","?","?","Dokan mount failed - Driver answer that something is wrong.","Enable ouput debug message to stderr","Dokan mount succeed.","The specified volume supports sharing logical clusters …","The specified volume supports the Encrypted File System …","The specified volume supports extended attributes.","?","?","The specified volume supports object identifiers.","The file system supports open by FileID. For more …","?","?","The specified volume supports reparse points.","The specified volume supports sparse files.","?","The specified volume supports transactions. For more …","The specified volume supports update sequence number (USN) …","Synchronize access.","The specified volume supports Unicode in file names as …","Dokan mount failed.","The specified volume is a compressed volume, for example, …","The specified volume supports disk quotas.","Write access to the DACL.","Write access to owner.","Enable mount drive as write-protected.","A cell that wraps an unitialzed wide c string buffer, …","Returns the set containing all flags.","Returns the set containing all flags.","Returns the set containing all flags.","Get an iterator over wide chars.","Returns the intersection between the two sets of flags.","Returns the intersection between the two sets of flags.","Returns the intersection between the two sets of flags.","Disables all flags disabled in the set.","Disables all flags disabled in the set.","Disables all flags disabled in the set.","Returns the union of the two sets of flags.","Returns the union of the two sets of flags.","Returns the union of the two sets of flags.","Adds the set of flags.","Adds the set of flags.","Adds the set of flags.","","Returns the raw value of the flags currently stored.","","Returns the raw value of the flags currently stored.","","Returns the raw value of the flags currently stored.","Returns the left flags, but with all the right flags …","Returns the left flags, but with all the right flags …","Returns the left flags, but with all the right flags …","Toggles the set of flags.","Toggles the set of flags.","Toggles the set of flags.","","","","","","","","","","","","","","","","","","","Returns the complement of this set of flags.","Returns the complement of this set of flags.","Returns the complement of this set of flags.","Returns <code>true</code> if all of the flags in <code>other</code> are contained …","Returns <code>true</code> if all of the flags in <code>other</code> are contained …","Returns <code>true</code> if all of the flags in <code>other</code> are contained …","Called for opening files and directories","","","","Returns the difference between the flags in <code>self</code> and <code>other</code>.","Returns the difference between the flags in <code>self</code> and <code>other</code>.","Returns the difference between the flags in <code>self</code> and <code>other</code>.","Get the driver version.","Returns an empty set of flags.","Returns an empty set of flags.","Returns an empty set of flags.","","","","","Fill this with a new FindData entry.","Called to get a function that returns entries in a …","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Convert from underlying bit representation, unless that …","Convert from underlying bit representation, unless that …","Convert from underlying bit representation, unless that …","Convert from underlying bit representation, preserving all …","","","Convert from underlying bit representation, preserving all …","","Convert from underlying bit representation, preserving all …","Convert from underlying bit representation, dropping any …","Convert from underlying bit representation, dropping any …","Convert from underlying bit representation, dropping any …","","","","Get the value for a flag from its stringified name.","Get the value for a flag from its stringified name.","Get the value for a flag from its stringified name.","Called for calls to GetVolumeInformation","","Initialize the library, if needed.","Inserts the specified flags in-place.","Inserts the specified flags in-place.","Inserts the specified flags in-place.","Returns the intersection between the flags in <code>self</code> and …","Returns the intersection between the flags in <code>self</code> and …","Returns the intersection between the flags in <code>self</code> and …","Returns <code>true</code> if there are flags common to both <code>self</code> and …","Returns <code>true</code> if there are flags common to both <code>self</code> and …","Returns <code>true</code> if there are flags common to both <code>self</code> and …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","Returns <code>true</code> if all flags are currently set.","Returns <code>true</code> if all flags are currently set.","Returns <code>true</code> if all flags are currently set.","Returns <code>true</code> if no flags are currently stored.","Returns <code>true</code> if no flags are currently stored.","Returns <code>true</code> if no flags are currently stored.","Returns true if this is [<code>SUCCESS</code>].","Iterate over enabled flag values.","Iterate over enabled flag values.","Iterate over enabled flag values.","Iterate over enabled flag values with their stringified …","Iterate over enabled flag values with their stringified …","Iterate over enabled flag values with their stringified …","Mount and run a filesystem from the given options an mount …","Called when the filesystem is mounted","Make an empty set of options","Create an empty file data","Returns the complement of this set of flags.","Returns the complement of this set of flags.","Returns the complement of this set of flags.","","Removes the specified flags in-place.","Removes the specified flags in-place.","Removes the specified flags in-place.","Unmount a drive from the given path.","Inserts or removes the specified flags depending on the …","Inserts or removes the specified flags depending on the …","Inserts or removes the specified flags depending on the …","Set the file name.","Set the mount point","Set the option flags","Set the file size","Set the requested version","Shutdown the api and release all resources.","Returns the set difference of the two sets of flags.","Returns the set difference of the two sets of flags.","Returns the set difference of the two sets of flags.","Disables all flags enabled in the set.","Disables all flags enabled in the set.","Disables all flags enabled in the set.","Returns the symmetric difference between the flags in <code>self</code> …","Returns the symmetric difference between the flags in <code>self</code> …","Returns the symmetric difference between the flags in <code>self</code> …","","","","Toggles the specified flags in-place.","Toggles the specified flags in-place.","Toggles the specified flags in-place.","Get the total length of the buffer, in wide chars","","","","","","","","","","","","","","","","","","","","","","","","","Returns the union of between the flags in <code>self</code> and <code>other</code>.","Returns the union of between the flags in <code>self</code> and <code>other</code>.","Returns the union of between the flags in <code>self</code> and <code>other</code>.","Unmount the drive from the given drive letter.","Called when the filesystem is unmounted","Get the version.","Write the contents of an AsWide into this buffer, marking …"],"i":[1,3,3,0,0,2,3,2,3,2,3,1,3,7,7,3,7,3,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,0,0,0,0,1,1,1,1,25,1,7,3,7,0,2,3,0,0,2,1,2,3,2,2,1,1,1,1,1,1,7,3,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,7,2,2,1,1,3,0,1,2,3,25,1,2,3,1,2,3,1,2,3,1,2,3,1,1,2,2,3,3,1,2,3,1,2,3,10,19,14,11,1,2,7,3,10,19,14,11,1,2,7,3,7,7,1,2,3,1,2,3,22,10,11,7,1,2,3,0,1,2,3,7,1,2,3,14,22,1,1,1,1,1,2,2,2,2,7,7,3,3,3,3,10,19,14,11,1,2,7,3,1,2,3,1,1,2,2,3,3,1,2,3,1,2,3,1,2,3,22,7,0,1,2,3,1,2,3,1,2,3,10,19,14,11,1,2,7,3,1,2,3,1,2,3,1,2,3,7,1,2,3,1,2,3,0,22,10,11,1,2,3,7,1,2,3,0,1,2,3,11,10,10,11,10,0,1,2,3,1,2,3,1,2,3,0,7,7,1,2,3,19,10,19,14,11,1,2,7,3,10,19,14,11,1,2,7,3,10,19,14,11,1,2,7,3,1,2,3,0,22,0,19],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[],1],[[],2],[[],3],[[]],[[1,1],1],[[2,2],2],[[3,3],3],[[1,1]],[[2,2]],[[3,3]],[[1,1],1],[[2,2],2],[[3,3],3],[[1,1]],[[2,2]],[[3,3]],[1,4],[1,4],[2,5],[2,5],[3,6],[3,6],[[1,1],1],[[2,2],2],[[3,3],3],[[1,1]],[[2,2]],[[3,3]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[7,7],[[]],[1,1],[2,2],[3,3],[[1,1],8],[[2,2],8],[[3,3],8],[[1,8],9],[[],10],[[],11],[[],7],[[1,1],1],[[2,2],2],[[3,3],3],[[],12],[[],1],[[],2],[[],3],[[7,7],8],[[1,13]],[[2,13]],[[3,13]],[[14,11]],[14,9],[[1,15],16],[[1,15],16],[[1,15],16],[[1,15],16],[[1,15],16],[[2,15],16],[[2,15],16],[[2,15],16],[[2,15],16],[[7,15],16],[[7,15],16],[[3,15],16],[[3,15],16],[[3,15],16],[[3,15],16],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[4,[[17,[1]]]],[5,[[17,[2]]]],[6,[[17,[3]]]],[4,1],[4,1],[5,2],[5,2],[6,3],[6,3],[4,1],[5,2],[6,3],[13,1],[13,2],[13,3],[18,[[17,[1]]]],[18,[[17,[2]]]],[18,[[17,[3]]]],[[19,12,12,2,19],9],[7],[[]],[[1,1]],[[2,2]],[[3,3]],[[1,1],1],[[2,2],2],[[3,3],3],[[1,1],8],[[2,2],8],[[3,3],8],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[1],[2],[3],[1,8],[2,8],[3,8],[1,8],[2,8],[3,8],[7,8],[1,[[20,[1]]]],[2,[[20,[2]]]],[3,[[20,[3]]]],[1,[[21,[1]]]],[2,[[21,[2]]]],[3,[[21,[3]]]],[[10,22],[[23,[7]]]],[[],9],[[],10],[[],11],[1,1],[2,2],[3,3],[24],[[1,1]],[[2,2]],[[3,3]],[25,8],[[1,1,8]],[[2,2,8]],[[3,3,8]],[[11,25]],[[10,25]],[[10,3]],[[11,26]],[[10,27]],[[]],[[1,1],1],[[2,2],2],[[3,3],3],[[1,1]],[[2,2]],[[3,3]],[[1,1],1],[[2,2],2],[[3,3],3],0,[[]],[[],28],[[1,1]],[[2,2]],[[3,3]],[19,29],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],30],[[],30],[[],30],[[],30],[[],30],[[],30],[[],30],[[],30],[[1,1],1],[[2,2],2],[[3,3],3],[31,8],[[],9],[[],12],[[19,25]]],"p":[[3,"AccessMask"],[3,"FileSystemFlags"],[3,"OptionFlags"],[6,"FILE_ACCESS_FLAGS"],[6,"DWORD"],[6,"DokanOptionFlag"],[3,"MainResult"],[15,"bool"],[6,"NTSTATUS"],[3,"Options"],[3,"FindData"],[15,"u32"],[8,"IntoIterator"],[3,"FillFindData"],[3,"Formatter"],[6,"Result"],[4,"Option"],[15,"str"],[3,"WriteWideCStringCell"],[3,"Iter"],[3,"IterNames"],[8,"FileSystem"],[4,"Result"],[3,"Demand"],[8,"AsWide"],[15,"u64"],[15,"u16"],[3,"String"],[15,"usize"],[3,"TypeId"],[15,"char"]]},\
"dokany_sys":{"doc":"","t":"GRMGGDGMGMGMMRRRRDGRRDDDRRRRRRRRRRRRRRRRGMMGMGMMFMFFFFFFFGFGMFFFFFFFRDGRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRMGMGMGMGRRRRMGMGMGMGMMGMGGGGGGGMGRRMMMMGMGGMMMGGGGGGGGGGGGGGGGMMMRMGMDGRRRRRRRRRRRMMMMMGMGMGMGMGMMMRMMGGGGMMGMGGMRMMMGDDRRMGMMGLLLLLLLLLLLLLLLLLLMMMGGLLLLLLLLLLLLMMMMMMMLLLLLLLLLLLMMMMMMLLLLLLLLLMMMMMMMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","n":["ACCESS_MASK","ACCESS_SYSTEM_SECURITY","AllocationUnitSize","BOOL","BOOLEAN","BY_HANDLE_FILE_INFORMATION","CHAR","Cleanup","CleanupCallback","CloseFile","CloseFileCallback","Context","Control","DELETE","DOKAN_DRIVER_INSTALL_ERROR","DOKAN_DRIVE_LETTER_ERROR","DOKAN_ERROR","DOKAN_FILE_INFO","DOKAN_HANDLE","DOKAN_MOUNT_ERROR","DOKAN_MOUNT_POINT_ERROR","DOKAN_MOUNT_POINT_INFO","DOKAN_OPERATIONS","DOKAN_OPTIONS","DOKAN_OPTION_ALLOW_IPC_BATCHING","DOKAN_OPTION_ALT_STREAM","DOKAN_OPTION_CASE_SENSITIVE","DOKAN_OPTION_CURRENT_SESSION","DOKAN_OPTION_DEBUG","DOKAN_OPTION_DISPATCH_DRIVER_LOGS","DOKAN_OPTION_ENABLE_UNMOUNT_NETWORK_DRIVE","DOKAN_OPTION_FILELOCK_USER_MODE","DOKAN_OPTION_MOUNT_MANAGER","DOKAN_OPTION_NETWORK","DOKAN_OPTION_REMOVABLE","DOKAN_OPTION_STDERR","DOKAN_OPTION_WRITE_PROTECT","DOKAN_START_ERROR","DOKAN_SUCCESS","DOKAN_VERSION_ERROR","DWORD","Dacl","DeleteDirectory","DeleteDirectoryCallback","DeleteFile","DeleteFileCallback","DeleteOnClose","DeviceName","DokanCloseHandle","DokanContext","DokanCreateFileSystem","DokanDriverVersion","DokanGetMountPointList","DokanInit","DokanIsFileSystemRunning","DokanIsNameInExpression","DokanMain","DokanMainResult","DokanOpenRequestorToken","DokanOptionFlag","DokanOptions","DokanReleaseMountPointList","DokanRemoveMountPoint","DokanResetTimeout","DokanShutdown","DokanUnmount","DokanVersion","DokanWaitForFileSystemClosed","FALSE","FILETIME","FILE_ACCESS_FLAGS","FILE_ADD_FILE","FILE_ADD_SUBDIRECTORY","FILE_ALL_ACCESS","FILE_APPEND_DATA","FILE_CASE_PRESERVED_NAMES","FILE_CASE_SENSITIVE_SEARCH","FILE_CREATE_PIPE_INSTANCE","FILE_DAX_VOLUME","FILE_DELETE_CHILD","FILE_EXECUTE","FILE_FILE_COMPRESSION","FILE_LIST_DIRECTORY","FILE_NAMED_STREAMS","FILE_PERSISTENT_ACLS","FILE_READ_ATTRIBUTES","FILE_READ_DATA","FILE_READ_EA","FILE_READ_ONLY_VOLUME","FILE_RETURNS_CLEANUP_RESULT_INFO","FILE_SEQUENTIAL_WRITE_ONCE","FILE_SUPPORTS_BLOCK_REFCOUNTING","FILE_SUPPORTS_ENCRYPTION","FILE_SUPPORTS_EXTENDED_ATTRIBUTES","FILE_SUPPORTS_GHOSTING","FILE_SUPPORTS_HARD_LINKS","FILE_SUPPORTS_INTEGRITY_STREAMS","FILE_SUPPORTS_OBJECT_IDS","FILE_SUPPORTS_OPEN_BY_FILE_ID","FILE_SUPPORTS_POSIX_UNLINK_RENAME","FILE_SUPPORTS_REMOTE_STORAGE","FILE_SUPPORTS_REPARSE_POINTS","FILE_SUPPORTS_SPARSE_FILES","FILE_SUPPORTS_SPARSE_VDL","FILE_SUPPORTS_TRANSACTIONS","FILE_SUPPORTS_USN_JOURNAL","FILE_TRAVERSE","FILE_UNICODE_ON_DISK","FILE_VOLUME_IS_COMPRESSED","FILE_VOLUME_QUOTAS","FILE_WRITE_ATTRIBUTES","FILE_WRITE_DATA","FILE_WRITE_EA","FindFiles","FindFilesCallback","FindFilesWithPattern","FindFilesWithPatternCallback","FindStreams","FindStreamsCallback","FlushFileBuffers","FlushFileBuffersCallback","GENERIC_ALL","GENERIC_EXECUTE","GENERIC_READ","GENERIC_WRITE","GetDiskFreeSpace","GetDiskFreeSpaceCallback","GetFileInformation","GetFileInformationCallback","GetFileSecurity","GetFileSecurityCallback","GetVolumeInformation","GetVolumeInformationCallback","GlobalContext","Group","HANDLE","IsDirectory","LONGLONG","LPBY_HANDLE_FILE_INFORMATION","LPCVOID","LPCWSTR","LPDWORD","LPVOID","LPWSTR","LockFile","LockFileCallback","MAXIMUM_ALLOWED","MAX_PATH","MountOptions","MountPoint","MountPoint","Mounted","MountedCallback","MoveFile","MoveFileCallback","NTSTATUS","Nocache","Options","Owner","PCWSTR","PDOKAN_FILE_INFO","PDOKAN_IO_SECURITY_CONTEXT","PDOKAN_MOUNT_POINT_INFO","PDOKAN_OPERATIONS","PDOKAN_OPTIONS","PFillFindData","PFillFindStreamData","PSECURITY_DESCRIPTOR","PSECURITY_INFORMATION","PULONG","PULONGLONG","PVOID","PWIN32_FIND_DATAW","PWIN32_FIND_STREAM_DATA","PWSTR","PagingIo","ProcessId","ProcessingContext","READ_CONTROL","ReadFile","ReadFileCallback","Revision","SECURITY_DESCRIPTOR","SECURITY_INFORMATION","SPECIFIC_RIGHTS_ALL","STANDARD_RIGHTS_ALL","STANDARD_RIGHTS_EXECUTE","STANDARD_RIGHTS_READ","STANDARD_RIGHTS_REQUIRED","STANDARD_RIGHTS_WRITE","STATUS_INTERNAL_ERROR","STATUS_NOT_IMPLEMENTED","STATUS_NO_SUCH_FILE","STATUS_SUCCESS","SYNCHRONIZE","Sacl","Sbz1","SectorSize","SessionId","SetAllocationSize","SetAllocationSizeCallback","SetEndOfFile","SetEndOfFileCallback","SetFileAttributes","SetFileAttributesCallback","SetFileSecurity","SetFileSecurityCallback","SetFileTime","SetFileTimeCallback","SingleThread","StreamSize","SynchronousIo","TRUE","Timeout","Type","UCHAR","ULONG","ULONG64","ULONGLONG","UNCName","UNCName","USHORT","UnlockFile","UnlockFileCallback","Unmounted","Unmounted","VOLUME_SECURITY_DESCRIPTOR_MAX_SIZE","Version","VolumeSecurityDescriptor","VolumeSecurityDescriptorLength","WCHAR","WIN32_FIND_DATAW","WIN32_FIND_STREAM_DATA","WRITE_DAC","WRITE_OWNER","WriteFile","WriteFileCallback","WriteToEndOfFile","ZwCreateFile","ZwCreateFileCallback","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","cAlternateFileName","cFileName","cStreamName","c_int","c_void","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","default","default","dwFileAttributes","dwFileAttributes","dwHighDateTime","dwLowDateTime","dwReserved0","dwReserved1","dwVolumeSerialNumber","eq","fmt","from","from","from","from","from","from","from","from","from","ftCreationTime","ftCreationTime","ftLastAccessTime","ftLastAccessTime","ftLastWriteTime","ftLastWriteTime","into","into","into","into","into","into","into","into","into","nFileIndexHigh","nFileIndexLow","nFileSizeHigh","nFileSizeHigh","nFileSizeLow","nFileSizeLow","nNumberOfLinks","new","new","to_owned","to_owned","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id"],"q":["dokany_sys","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","Allocation Unit Size of the volume. This will affect the …","","","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code>, </em>…","","Cleanup Dokan API callback","","CloseFile Dokan API callback","","Context that can be used to carry information between …","","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","Dokan mount failed - Can’t install driver.","Dokan mount failed - Bad drive letter.","Dokan mount error.","Dokan file information on the current operation.","","Dokan mount failed.","Dokan mount failed.","Dokan Mount point information","Dokan API callbacks interface","Dokan mount options used to describe Dokan device behavior.","Pull batches of events from the driver instead of a single …","Enable the use of alternate stream paths in the form :. If …","Enable Case sensitive path.","Mount the drive on current session only","Enable ouput debug message","Forward the kernel driver global and volume logs to the …","Allows unmounting of network drive via explorer","Enable Lockfile/Unlockfile operations.","Use Windows Mount Manager.","Use network drive - Dokan network provider needs to be …","Use removable drive","Enable ouput debug message to stderr","Enable mount drive as write-protected","Dokan mount failed - Driver answer that something is wrong.","Dokan mount succeed.","Dokan mount failed.","","","Check if it is possible to delete a directory.","","DeleteFile Dokan API callback","","Flag if the file has to be deleted during …","Disk Device Name","Unmount the Dokan instance.","Reserved. Used internally by Dokan library. Never modify.","Mount a new Dokan Volume.","Get the version of the Dokan driver.","Get active Dokan mount points.","Initialize all required Dokan internal resources.","Check if the FileSystem is still running or not.","Checks whether Name matches Expression","Mount a new Dokan Volume.","","Get the handle to Access Token.","","A pointer to DOKAN_OPTIONS which was passed to DokanMain …","Release Mount point list resources from …","Unmount a Dokan device from a mount point","Extends the timeout of the current IO operation in driver.","Release all allocated resources by DokanInit when they are …","Unmount a Dokan device from a driver letter.","Get the version of Dokan.","Wait until the FileSystem is unmount.","<em>Required features: <code>&quot;Win32_Foundation&quot;</code></em>","<em>Required features: <code>&quot;Win32_Foundation&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","FindFiles Dokan API callback","","FindFilesWithPattern Dokan API callback","","FindStreams Dokan API callback","","FlushFileBuffers Dokan API callback","","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","GetDiskFreeSpace Dokan API callback","","GetFileInformation Dokan API callback","","GetFileSecurity Dokan API callback","","GetVolumeInformation Dokan API callback","","FileSystem can store anything here.","","","Requesting a directory file.","","","","","","","","LockFile Dokan API callback","","<em>Required features: <code>&quot;Win32_System_SystemServices&quot;</code></em>","<em>Required features: <code>&quot;Win32_Foundation&quot;</code></em>","Contains information about the flags on the mount","Mount point. Can be “M:&quot; (drive letter) or “…","Mount point. It can be a driver letter like “M:&quot; or a …","Mounted Dokan API callback","","MoveFile Dokan API callback","","","Read or write directly from data source without cache","Features enabled for the mount.","","","","","","","","FillFindData Used to add an entry in FindFiles operation","FillFindStreamData Used to add an entry in FindStreams","","","","","","","","","Read or write is paging IO.","Process ID for the thread that originally requested a …","Reserved. Used internally by Dokan library. Never modify.","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","ReadFile Dokan API callback","","","<em>Required features: <code>&quot;Win32_Security&quot;</code>, <code>&quot;Win32_Foundation&quot;</code></em>","","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_Foundation&quot;</code></em>","<em>Required features: <code>&quot;Win32_Foundation&quot;</code></em>","<em>Required features: <code>&quot;Win32_Foundation&quot;</code></em>","<em>Required features: <code>&quot;Win32_Foundation&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","","","Sector Size of the volume. This will affect the file size.","Session ID of calling process","SetAllocationSize Dokan API callback","","SetEndOfFile Dokan API callback","","SetFileAttributes Dokan API callback","","SetFileSecurity Dokan API callback","","SetFileTime Dokan API callback","","Only use a single thread to process events. This is highly …","","Read or write is synchronous IO.","<em>Required features: <code>&quot;Win32_Foundation&quot;</code></em>","Max timeout in milliseconds of each request before Dokan …","File System Type","","","","","UNC name used for network volume","UNC Name for the Network Redirector see Support for UNC …","","UnlockFile Dokan API callback","","","Unmounted Dokan API callback","This is arbitrary. There isn’t really an absolute max, …","Version of the Dokan features requested without dots …","Optional Volume Security descriptor.","Length of the optional VolumeSecurityDescriptor provided. …","","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code>, </em>…","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","<em>Required features: <code>&quot;Win32_Storage_FileSystem&quot;</code></em>","WriteFile Dokan API callback","","If <code>TRUE</code>, write to the current end of file instead of using …","CreateFile Dokan API callback","","","","","","","","","","","","","","","","","","","","","","","Equivalent to C’s <code>signed int</code> (<code>int</code>) type.","Equivalent to C’s <code>void</code> type when used as a pointer.","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","Make a new empty <code>DOKAN_OPERATIONS</code>.","Make an empty <code>DOKAN_OPTIONS</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,7,0,0,0,0,6,0,6,0,13,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,6,0,6,0,13,14,0,13,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,6,0,6,0,6,0,0,0,0,0,6,0,6,0,6,0,6,0,7,2,0,13,0,0,0,0,0,0,0,6,0,0,0,14,14,7,6,0,6,0,0,13,7,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,13,13,0,6,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,7,14,6,0,6,0,6,0,6,0,6,0,7,5,13,0,7,14,0,0,0,0,14,7,0,6,0,0,6,0,7,7,7,0,0,0,0,0,6,0,13,6,0,13,6,14,7,1,2,3,4,5,13,6,14,7,1,2,3,4,5,4,4,5,0,0,1,2,3,4,5,1,2,3,4,5,6,7,3,4,1,1,4,4,3,7,7,13,6,14,7,1,2,3,4,5,3,4,3,4,3,4,13,6,14,7,1,2,3,4,5,3,3,3,4,3,4,3,6,7,1,2,3,4,5,13,6,14,7,1,2,3,4,5,13,6,14,7,1,2,3,4,5,13,6,14,7,1,2,3,4,5],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,0,0,0,0,[1,1],[2,2],[3,3],[4,4],[5,5],[[]],[[]],[[]],[[]],[[]],[[],6],[[],7],0,0,0,0,0,0,0,[[7,7],8],[[7,9],10],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,0,0,0,0,0,0,[[],6],[[],7],[[]],[[]],[[]],[[]],[[]],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12]],"p":[[3,"FILETIME"],[3,"SECURITY_DESCRIPTOR"],[3,"BY_HANDLE_FILE_INFORMATION"],[3,"WIN32_FIND_DATAW"],[3,"WIN32_FIND_STREAM_DATA"],[3,"DOKAN_OPERATIONS"],[3,"DOKAN_OPTIONS"],[15,"bool"],[3,"Formatter"],[6,"Result"],[4,"Result"],[3,"TypeId"],[3,"DOKAN_FILE_INFO"],[3,"DOKAN_MOUNT_POINT_INFO"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
