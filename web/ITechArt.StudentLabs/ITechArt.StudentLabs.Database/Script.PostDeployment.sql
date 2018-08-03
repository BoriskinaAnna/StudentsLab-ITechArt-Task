SET IDENTITY_INSERT [dbo].[City] ON 

INSERT [dbo].[City] ([Id], [Name]) VALUES (1, N'Минск')
SET IDENTITY_INSERT [dbo].[City] OFF
SET IDENTITY_INSERT [dbo].[LabType] ON 

INSERT [dbo].[LabType] ([Id], [Name]) VALUES (1, N'.net')
INSERT [dbo].[LabType] ([Id], [Name]) VALUES (2, N'java')
INSERT [dbo].[LabType] ([Id], [Name]) VALUES (4, N'js')
INSERT [dbo].[LabType] ([Id], [Name]) VALUES (3, N'qa')
INSERT [dbo].[LabType] ([Id], [Name]) VALUES (5, N'ruby')
SET IDENTITY_INSERT [dbo].[LabType] OFF
SET IDENTITY_INSERT [dbo].[Lab] ON 

INSERT [dbo].[Lab] ([Id], [TypeId], [CityId], [Name], [AdmissionStart], [AdmissionEnd], [TrainingStart], [TrainingEnd], [IsDraft]) VALUES (1, 2, 1, N'Full-Stack js Students lab', CAST(N'2018-03-01' AS Date), CAST(N'2018-09-01' AS Date), CAST(N'2018-07-01' AS Date), CAST(N'2018-08-01' AS Date), 0)
INSERT [dbo].[Lab] ([Id], [TypeId], [CityId], [Name], [AdmissionStart], [AdmissionEnd], [TrainingStart], [TrainingEnd], [IsDraft]) VALUES (2, 1, 1, N'Full-Stack js Students lab', CAST(N'2018-03-01' AS Date), CAST(N'2018-09-01' AS Date), CAST(N'2018-07-01' AS Date), CAST(N'2018-08-01' AS Date), 0)
INSERT [dbo].[Lab] ([Id], [TypeId], [CityId], [Name], [AdmissionStart], [AdmissionEnd], [TrainingStart], [TrainingEnd], [IsDraft]) VALUES (3, 1, 1, N'Full-Stack js Students lab', CAST(N'2018-03-01' AS Date), CAST(N'2018-02-01' AS Date), CAST(N'2018-07-01' AS Date), CAST(N'2018-07-01' AS Date), 0)
INSERT [dbo].[Lab] ([Id], [TypeId], [CityId], [Name], [AdmissionStart], [AdmissionEnd], [TrainingStart], [TrainingEnd], [IsDraft]) VALUES (4, 1, 1, N'Full-Stack js Students lab', CAST(N'2018-07-01' AS Date), CAST(N'2018-07-01' AS Date), CAST(N'2018-03-01' AS Date), CAST(N'2018-03-01' AS Date), 1)
INSERT [dbo].[Lab] ([Id], [TypeId], [CityId], [Name], [AdmissionStart], [AdmissionEnd], [TrainingStart], [TrainingEnd], [IsDraft]) VALUES (5, 2, 1, N'rtyh', CAST(N'2018-05-23' AS Date), CAST(N'2018-05-23' AS Date), CAST(N'2018-05-23' AS Date), CAST(N'2018-05-23' AS Date), 1)
SET IDENTITY_INSERT [dbo].[Lab] OFF
SET IDENTITY_INSERT [dbo].[Place] ON 

INSERT [dbo].[Place] ([Id], [Name]) VALUES (1, N'БГТУ')
SET IDENTITY_INSERT [dbo].[Place] OFF
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([Id], [FirstName], [LastName], [Email], [PasswordHash], [Salt]) VALUES (3, N'1', N'1', N'1', 0xa079a74e8255141f92689fa2386b2f3279d3bde5b55abad4addd8138988d9ef0b0c8e3675684b6f2c1a236a66d9148d9011ffc44aab80ddce5b3b1aae7d01352, 0xfab40c09fa7dca55686b1466a8f78c5b3f6f4cba3b260a22a6aadfa41f4b788e71d52fa2c98ea4d2d080d0017345f43bf2fa89ba5b1c27c1caa8001875c3d20f)
SET IDENTITY_INSERT [dbo].[User] OFF
SET IDENTITY_INSERT [dbo].[Lecture] ON 

INSERT [dbo].[Lecture] ([Id], [LabId], [PlaceId], [LectorId], [DateTime], [Theme], [Duraction]) VALUES (2, 1, 1, 3, CAST(N'2018-07-04T00:00:00.000' AS DateTime), N'Introductory', CAST(N'03:00:00' AS Time))
INSERT [dbo].[Lecture] ([Id], [LabId], [PlaceId], [LectorId], [DateTime], [Theme], [Duraction]) VALUES (9, 2, 1, 3, CAST(N'2018-07-04T00:00:00.000' AS DateTime), N'Web-программирование. Архитектуры, форматы. Протоколы.', CAST(N'02:00:00' AS Time))
INSERT [dbo].[Lecture] ([Id], [LabId], [PlaceId], [LectorId], [DateTime], [Theme], [Duraction]) VALUES (12, 2, 1, 3, CAST(N'2018-07-04T00:00:00.000' AS DateTime), N'ES2015+. Babel', CAST(N'01:30:00' AS Time))
SET IDENTITY_INSERT [dbo].[Lecture] OFF
SET IDENTITY_INSERT [dbo].[Role] ON 

INSERT [dbo].[Role] ([Id], [Name]) VALUES (3, N'Curator')
INSERT [dbo].[Role] ([Id], [Name]) VALUES (1, N'Lector')
INSERT [dbo].[Role] ([Id], [Name]) VALUES (2, N'Mentor')
SET IDENTITY_INSERT [dbo].[Role] OFF
SET IDENTITY_INSERT [dbo].[UserRole] ON 

INSERT [dbo].[UserRole] ([Id], [UserId], [RoleId]) VALUES (1, 3, 1)
SET IDENTITY_INSERT [dbo].[UserRole] OFF
SET IDENTITY_INSERT [dbo].[Attendance] ON 

INSERT [dbo].[Attendance] ([Id], [UserId], [LectureId]) VALUES (1, 3, 2)
SET IDENTITY_INSERT [dbo].[Attendance] OFF
